# apps/landing — CLAUDE.md

Astro + React + Tailwind landing page for i-am.clinic. SSR via `@astrojs/vercel/serverless`.

## Style exceptions

The global rule "no raw hex outside `tailwind.config.ts`" has two carve-outs:

1. `src/emails/palette.ts` — mirrors brand tokens for inline-styled email templates. Email clients cannot run Tailwind — inline styles require literal hex values. When updating brand tokens in `tailwind.config.ts`, update `src/emails/palette.ts` in the same commit.

2. `src/lib/seo.ts` → `siteMeta.themeColor` — `<meta name="theme-color">` is a static HTML string; there is no mechanism to reference a CSS variable or Tailwind token at the HTML meta level. Value is `#FDFAF5` (= `brand.cream.50`). When updating `brand.cream.50` in `tailwind.config.ts`, update `siteMeta.themeColor` in the same commit.

## Deferred: Content Security Policy (CSP)

CSP is intentionally omitted from `vercel.json`. Astro injects inline `<script>` blocks and React hydration bundles without stable hashes that can be statically enumerated. A strict CSP requires either `astro-csp` (or equivalent nonce-injection middleware) or switching to `unsafe-inline` (which defeats the purpose). Defer until we add a dedicated CSP integration. Track under security hardening work.
