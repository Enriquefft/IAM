/**
 * SEO metadata SSOT for i-am.clinic landing.
 *
 * All per-page meta lives here. Base.astro consumes SiteMeta at module load
 * and per-page PageMeta via the `pageMeta` prop.
 *
 * Raw hex exception: theme-color (#FDFAF5 = brand.cream.50) is documented in
 * apps/landing/CLAUDE.md §SSOT exceptions — HTML meta cannot import Tailwind config.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------------

const SiteMetaSchema = z.object({
  siteName: z.string(),
  siteUrl: z.string().url(),
  locale: z.string(),
  email: z.string().email(),
  /** brand.cream.50 — SSOT exception: static HTML meta cannot import tailwind.config.ts */
  themeColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  defaultOgImage: z.string().url(),
  twitterCard: z.literal("summary_large_image"),
  address: z.object({
    locality: z.string(),
    country: z.string(),
  }),
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
  locale: "es_PE",
  email: "hola@i-am.clinic",
  // brand.cream.50 — SSOT exception: HTML <meta name="theme-color"> is a
  // static string that cannot reference a CSS variable or Tailwind token.
  // Canonical value lives in tailwind.config.ts → theme.extend.colors.brand.cream.50.
  // Mirror palette.ts pattern: update both files on brand token change.
  themeColor: "#FDFAF5",
  defaultOgImage: "https://i-am.clinic/og.png",
  twitterCard: "summary_large_image",
  address: {
    locality: "Lima",
    country: "PE",
  },
});

// ---------------------------------------------------------------------------
// Per-page meta records
// ---------------------------------------------------------------------------

export const pages = {
  home: PageMetaSchema.parse({
    title: "i-am.clinic — Software para terapeutas de autismo en LatAm",
    description:
      "Agenda, notas SOAP y cobros en un solo lugar. Para psicólogos y psiquiatras que quieren cerrar el día con sus pacientes, no con papeleo.",
    noindex: false,
    ogType: "website",
  }),

  demo: PageMetaSchema.parse({
    title: "Demo interactivo · i-am.clinic",
    description:
      "Explora el flujo completo: agenda, transcripción de sesión y cobro en menos de 5 minutos. Sin registrarte.",
    noindex: false,
    ogType: "website",
  }),

  confirmado: PageMetaSchema.parse({
    title: "Confirmación — i-am.clinic",
    noindex: true,
    ogType: "website",
  }),

  privacidad: PageMetaSchema.parse({
    title: "Aviso de privacidad — i-am.clinic",
    description:
      "Cómo recolectamos, usamos y protegemos tu información en i-am.clinic. Cumplimiento con la Ley 29733 de Perú.",
    noindex: false,
    ogType: "article",
  }),

  terminos: PageMetaSchema.parse({
    title: "Términos de servicio — i-am.clinic",
    description:
      "Condiciones de uso de i-am.clinic: pagos, datos, cancelación y ley aplicable.",
    noindex: false,
    ogType: "article",
  }),

  notFound: PageMetaSchema.parse({
    title: "Página no encontrada — i-am.clinic",
    noindex: true,
    ogType: "website",
  }),
} as const satisfies Record<string, PageMeta>;
