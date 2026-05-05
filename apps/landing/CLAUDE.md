# apps/landing — CLAUDE.md

Astro + React + Tailwind landing page for i-am.clinic. SSR via `@astrojs/vercel/serverless`.

## Style exceptions

The global rule "no raw hex outside `tailwind.config.ts`" has one carve-out: `src/emails/palette.ts` mirrors brand tokens for inline-styled email templates. Email clients cannot run Tailwind — inline styles require literal hex values. When updating brand tokens in `tailwind.config.ts`, update `src/emails/palette.ts` in the same commit.
