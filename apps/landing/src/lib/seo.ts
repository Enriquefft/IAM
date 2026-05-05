/**
 * SEO metadata SSOT for i-am.clinic landing.
 *
 * Site-level constants (siteName, siteUrl, theme color, OG defaults) live
 * here. Country-varying truth (address, locality, jurisdiction, currency)
 * lives in `@/lib/i18n` — this file imports it; nobody duplicates.
 *
 * Per-page meta is exposed via {@link buildPageMeta} which composes a
 * `PageMeta` for a given locale + page key. Titles, descriptions, and
 * privacy/terms law citations vary per locale.
 *
 * Raw hex exception: theme-color (#FDFAF5 = brand.cream.50) is documented in
 * apps/landing/CLAUDE.md §SSOT exceptions — HTML meta cannot import Tailwind config.
 */

import { z } from "zod";
import { COUNTRIES, type Locale } from "@/lib/i18n";
import { homePageTitle, privacyPageDescription } from "@/lib/i18n";

// Re-export locale primitives so callers that only need locale types can
// import from `@/lib/seo`. Single source of truth still lives in `@/lib/i18n`.
export {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  localeToOgLocale,
} from "@/lib/i18n";
export type { Locale } from "@/lib/i18n";

// ---------------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------------

const SiteMetaSchema = z.object({
  siteName: z.string(),
  siteUrl: z.string().url(),
  email: z.string().email(),
  /** brand.cream.50 — SSOT exception: static HTML meta cannot import tailwind.config.ts */
  themeColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  defaultOgImage: z.string().url(),
  twitterCard: z.literal("summary_large_image"),
});

export type SiteMeta = z.infer<typeof SiteMetaSchema>;

const OgTypeSchema = z.enum(["website", "article"]);
export type OgType = z.infer<typeof OgTypeSchema>;

const PageMetaSchema = z.object({
  title: z.string(),
  description: z.string().max(160).optional(),
  noindex: z.boolean().default(false),
  ogType: OgTypeSchema.default("website"),
  /** Override canonical path; defaults to the page's own URL */
  canonicalPath: z.string().optional(),
});

export type PageMeta = z.infer<typeof PageMetaSchema>;

// ---------------------------------------------------------------------------
// Site-level constants (validated at module load)
// ---------------------------------------------------------------------------

export const siteMeta: SiteMeta = SiteMetaSchema.parse({
  siteName: "i-am.clinic",
  siteUrl: "https://i-am.clinic",
  email: "hola@i-am.clinic",
  // brand.cream.50 — SSOT exception: HTML <meta name="theme-color"> is a
  // static string that cannot reference a CSS variable or Tailwind token.
  // Canonical value lives in tailwind.config.ts → theme.extend.colors.brand.cream.50.
  // Mirror palette.ts pattern: update both files on brand token change.
  themeColor: "#FDFAF5",
  defaultOgImage: "https://i-am.clinic/og.png",
  twitterCard: "summary_large_image",
});

/** Per-locale postal address derived from the country SSOT. */
export function siteAddress(locale: Locale): { locality: string; country: string } {
  const country = COUNTRIES[locale];
  return { locality: country.locality, country: country.isoCountry };
}

// ---------------------------------------------------------------------------
// Per-page meta — locale-aware factory
// ---------------------------------------------------------------------------

export type PageKey =
  | "home"
  | "demo"
  | "confirmado"
  | "privacidad"
  | "terminos"
  | "notFound";

export function buildPageMeta(key: PageKey, locale: Locale): PageMeta {
  switch (key) {
    case "home":
      return PageMetaSchema.parse({
        title: homePageTitle(locale),
        description:
          "Agenda, notas SOAP y cobros en un solo lugar. Para psicólogos y psiquiatras que quieren cerrar el día con sus pacientes, no con papeleo.",
        noindex: false,
        ogType: "website",
      });
    case "demo":
      return PageMetaSchema.parse({
        title: "Demo interactivo · i-am.clinic",
        description:
          "Explora el flujo completo: agenda, transcripción de sesión y cobro en menos de 5 minutos. Sin registrarte.",
        noindex: false,
        ogType: "website",
      });
    case "confirmado":
      return PageMetaSchema.parse({
        title: "Confirmación — i-am.clinic",
        noindex: true,
        ogType: "website",
      });
    case "privacidad":
      return PageMetaSchema.parse({
        title: "Aviso de privacidad — i-am.clinic",
        description: privacyPageDescription(locale),
        noindex: false,
        ogType: "article",
      });
    case "terminos":
      return PageMetaSchema.parse({
        title: "Términos de servicio — i-am.clinic",
        description:
          "Condiciones de uso de i-am.clinic: pagos, datos, cancelación y ley aplicable.",
        noindex: false,
        ogType: "article",
      });
    case "notFound":
      return PageMetaSchema.parse({
        title: "Página no encontrada — i-am.clinic",
        noindex: true,
        ogType: "website",
      });
  }
}
