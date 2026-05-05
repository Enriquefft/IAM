import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import { shield } from "@kindspells/astro-shield";

// https://astro.build/config
export default defineConfig({
  site: "https://i-am.clinic",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      // /confirmado is transactional; /kitchen-sink is a dev-only preview
      filter: (page) =>
        !page.includes("/confirmado") && !page.includes("/kitchen-sink"),
    }),
    shield({
      sri: {
        // SSR mode: astro-shield middleware computes per-request hashes and
        // injects them into the Content-Security-Policy response header.
        enableMiddleware: true,
        // enableStatic: false because we use serverless SSR (no static HTML files to scan)
        enableStatic: false,
      },
      securityHeaders: {
        contentSecurityPolicy: {
          cspDirectives: {
            "default-src": "'self'",
            // script-src: 'self' + 'wasm-unsafe-eval'; inline script hashes injected by shield
            "script-src": "'self' 'wasm-unsafe-eval'",
            // style-src: 'unsafe-inline' required — Tailwind JIT inlines critical styles
            "style-src": "'self' 'unsafe-inline'",
            // img-src: 'self' + data: (inline SVGs/sprites) + https: (OG images, remote assets)
            "img-src": "'self' data: https:",
            // font-src: 'self' — @fontsource fonts are bundled locally
            "font-src": "'self'",
            // connect-src: 'self' — API routes are same-origin; extend here for any new third-party XHR
            "connect-src": "'self'",
            "form-action": "'self'",
            "frame-ancestors": "'self'",
            "base-uri": "'self'",
            "object-src": "'none'",
            "upgrade-insecure-requests": "",
          },
        },
      },
    }),
  ],
});
