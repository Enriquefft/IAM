# apps/landing — CLAUDE.md

Astro + React + Tailwind landing page for i-am.clinic. SSR via `@astrojs/vercel/serverless`.

## Style exceptions

The global rule "no raw hex outside `tailwind.config.ts`" has two carve-outs:

1. `src/emails/palette.ts` — mirrors brand tokens for inline-styled email templates. Email clients cannot run Tailwind — inline styles require literal hex values. When updating brand tokens in `tailwind.config.ts`, update `src/emails/palette.ts` in the same commit.

2. `src/lib/seo.ts` → `siteMeta.themeColor` — `<meta name="theme-color">` is a static HTML string; there is no mechanism to reference a CSS variable or Tailwind token at the HTML meta level. Value is `#FDFAF5` (= `brand.cream.50`). When updating `brand.cream.50` in `tailwind.config.ts`, update `siteMeta.themeColor` in the same commit.

## CSP (static, via vercel.json)

CSP is shipped as a static response header in `vercel.json` (edge-applied, before the SSR function runs). One header, one source of truth, no runtime state.

Current directives:
- `default-src 'self'`
- `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'` — `'unsafe-inline'` required because Astro emits framework-managed inline scripts (3+ per page) for `client:*` hydration directives and `astro:loaded` dispatch; these cannot be removed without abandoning client islands
- `style-src 'self' 'unsafe-inline'` — `'unsafe-inline'` required because Tailwind JIT inlines critical CSS at render time
- `img-src 'self' data: https:`
- `font-src 'self'` — @fontsource fonts are bundled locally
- `connect-src 'self'` — all API routes are same-origin; if you add a third-party XHR target (analytics, error tracking, etc.), add its origin here
- `form-action 'self'`
- `frame-ancestors 'self'`
- `base-uri 'self'`
- `object-src 'none'`
- `upgrade-insecure-requests`

If you add a new third-party script (e.g., analytics SDK from `cdn.example.com`):
1. Add the CDN origin to `script-src` in `vercel.json`
2. If the script makes XHR/fetch calls home, add that origin to `connect-src`
3. After deploy, verify with `curl -sI https://www.i-am.clinic/ | grep -i content-security-policy`

### Inline-script hygiene

Hand-written inline scripts are forbidden — every executable inline `<script>` in source widens the `'unsafe-inline'` blast radius. The framework-emitted ones we cannot avoid; ours we can.

Place page-scoped JS in `src/scripts/<name>.ts` and import via a bundled `<script>` tag (no `is:inline`, no `set:html`). Astro will emit it as `_astro/*.js` covered by `script-src 'self'`.

`<script type="application/ld+json">` is allowed — JSON-LD is data, not script-src-controlled.

### Why not hash-based CSP

We tried `@kindspells/astro-shield` with `sri.enableMiddleware: true` (commit `aa47cbe`, reverted). The middleware mutates its singleton `cspDirectives` config across requests on warmed serverless lambdas (`patchCspHeader` in `core.mjs:52` returns `s.cspDirectives ?? {}` by reference, then assigns `i["script-src"] = "'none'"` for any page where shield finds zero inline scripts) — corrupting the policy for every subsequent request on that instance. Symptom: deployed CSP became `script-src 'none' 'sha256-...'` (without `'self'`), blocking all `_astro/*.js` and `_astro/*.css` bundle loads. Static CSP avoids the entire class of bug.
