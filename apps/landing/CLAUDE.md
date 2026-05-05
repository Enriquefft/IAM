# apps/landing — CLAUDE.md

Astro + React + Tailwind landing page for i-am.clinic. SSR via `@astrojs/vercel/serverless`.

## Style exceptions

The global rule "no raw hex outside `tailwind.config.ts`" has two carve-outs:

1. `src/emails/palette.ts` — mirrors brand tokens for inline-styled email templates. Email clients cannot run Tailwind — inline styles require literal hex values. When updating brand tokens in `tailwind.config.ts`, update `src/emails/palette.ts` in the same commit.

2. `src/lib/seo.ts` → `siteMeta.themeColor` — `<meta name="theme-color">` is a static HTML string; there is no mechanism to reference a CSS variable or Tailwind token at the HTML meta level. Value is `#FDFAF5` (= `brand.cream.50`). When updating `brand.cream.50` in `tailwind.config.ts`, update `siteMeta.themeColor` in the same commit.

## CSP via astro-shield

`@kindspells/astro-shield` is configured in `astro.config.mjs` with `sri.enableMiddleware: true`. It intercepts every SSR response, computes SHA-256 hashes for all inline `<script>` and `<style>` blocks present in that page's HTML, and injects them into a `Content-Security-Policy` response header.

Current policy base (defined in `astro.config.mjs` → `shield({ securityHeaders: { contentSecurityPolicy: { cspDirectives: { ... } } } })`):
- `default-src 'self'`
- `script-src 'self' 'wasm-unsafe-eval' [hashes injected by shield]`
- `style-src 'self' 'unsafe-inline'` — `'unsafe-inline'` required because Tailwind JIT inlines critical CSS at render time; hash-based style CSP would require enumerating Tailwind's generated class strings per page
- `img-src 'self' data: https:`
- `font-src 'self'` — @fontsource fonts are bundled locally
- `connect-src 'self'` — all API routes are same-origin; if you add a third-party XHR target (analytics, error tracking, etc.), add its origin here
- `form-action 'self'`
- `frame-ancestors 'self'`
- `base-uri 'self'`
- `object-src 'none'`
- `upgrade-insecure-requests`

If you add a new third-party script (e.g., analytics SDK from `cdn.example.com`):
1. Add the CDN origin to `script-src` in `astro.config.mjs`
2. If the script makes XHR/fetch calls home, add that origin to `connect-src`
3. Run `pnpm build && pnpm preview` and verify the CSP header with `curl -si http://localhost:4321/ | grep -i content-security-policy`
