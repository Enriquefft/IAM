import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// CSP is shipped statically via vercel.json (edge-applied). See apps/landing/CLAUDE.md.

// SSR (output: "server") + dynamic [locale] routes are not statically
// enumerable, so the sitemap integration can't auto-discover them. Provide
// the canonical URL set explicitly. Locales must match astro.i18n.locales
// below and src/lib/i18n/locales.ts (LOCALE_TO_PATH).
const SITE = "https://i-am.clinic";
const SITEMAP_LOCALES = ["pe", "mx", "ar", "co", "cl"];
const SITEMAP_ROUTES = ["", "/demo", "/privacidad", "/terminos"];
const SITEMAP_CUSTOM_PAGES = SITEMAP_LOCALES.flatMap((loc) =>
  SITEMAP_ROUTES.map((route) => `${SITE}/${loc}${route}`),
);

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  // Locale segment SSOT: src/lib/i18n/locales.ts (LOCALE_TO_PATH).
  // BCP 47 mapping for sitemap hreflang lives below in `sitemap()`.
  i18n: {
    locales: ["pe", "mx", "ar", "co", "cl"],
    defaultLocale: "pe",
    routing: "manual",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // SSR + dynamic [locale] routes aren't auto-enumerable — feed the
      // canonical URL set explicitly.
      customPages: SITEMAP_CUSTOM_PAGES,
      // /confirmado is transactional; /kitchen-sink is a dev-only preview
      filter: (page) =>
        !page.includes("/confirmado") && !page.includes("/kitchen-sink"),
      // Emit hreflang alternates for every locale, mapped from URL path
      // segments (pe/mx/…) to BCP 47 tags (es-PE/es-MX/…).
      i18n: {
        defaultLocale: "pe",
        locales: {
          pe: "es-PE",
          mx: "es-MX",
          ar: "es-AR",
          co: "es-CO",
          cl: "es-CL",
        },
      },
    }),
  ],
});
