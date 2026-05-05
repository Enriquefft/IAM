/**
 * Country SSOT for apps/landing.
 *
 * One canonical {@link Country} record per supported locale. Every component,
 * page, and email that varies by country imports from `COUNTRIES[locale]`
 * — never duplicates currency codes, payment-method labels, jurisdiction
 * clauses, or address strings inline.
 *
 * Validated at module load via Zod. Adding a new locale requires (1) adding
 * to {@link SUPPORTED_LOCALES} in `./locales.ts` and (2) adding the matching
 * Country entry here — TypeScript's exhaustiveness check forces the second.
 */

import { z } from "zod";
import { SUPPORTED_LOCALES, type Locale, type LocalePath, localeToPath } from "./locales";

// ---------------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------------

const CurrencySchema = z.object({
  /** ISO 4217 alphabetic code. */
  code: z.enum(["PEN", "MXN", "ARS", "COP", "CLP"]),
  /** Display symbol used inline next to amounts (`S/`, `MX$`, `AR$`, …). */
  symbol: z.string().min(1),
  /** BCP 47 tag passed to `Intl.NumberFormat` for formatting. */
  intlLocale: z.string().min(2),
});

const PaymentMethodSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
});

const JurisdictionSchema = z.object({
  /** Country name in Spanish, capitalized (`Perú`, `México`, …). */
  country: z.string().min(1),
  /** Capital or main court city used in terms-of-service venue clauses. */
  courts: z.string().min(1),
  /** Phrase fragment for "leyes del/de …" — full noun phrase. */
  governingLawPhrase: z.string().min(1),
});

const PrivacyLawSchema = z.object({
  /** Citation as it appears in privacy notice prose (e.g. "Ley 29733"). */
  citation: z.string().min(1),
  /** Country label used to qualify the law ("del Perú", "de México", …). */
  jurisdictionLabel: z.string().min(1),
});

const CountrySchema = z.object({
  locale: z.enum(SUPPORTED_LOCALES),
  /** ISO 3166-1 alpha-2 uppercase. */
  isoCountry: z.enum(["PE", "MX", "AR", "CO", "CL"]),
  /** Lowercase URL prefix segment. */
  pathSegment: z.enum(["pe", "mx", "ar", "co", "cl"]),
  /** Country name in Spanish, used in user-facing copy (`Perú`, `México`). */
  displayName: z.string().min(1),
  /** Demonym/locality for "Hecho en X" (`Lima`, `Ciudad de México`, …). */
  locality: z.string().min(1),
  currency: CurrencySchema,
  jurisdiction: JurisdictionSchema,
  privacyLaw: PrivacyLawSchema,
  /** Local payment methods, in display order. First two render in compact lists. */
  payments: z.array(PaymentMethodSchema).min(2),
  /** International dialing prefix without `+` (used for WhatsApp links). */
  whatsappCountryCode: z.string().regex(/^\d+$/),
  /** Underscore-separated OG locale (es_PE, es_MX, …). */
  ogLocale: z.string().regex(/^[a-z]{2}_[A-Z]{2}$/),
});

export type Country = z.infer<typeof CountrySchema>;
export type Currency = z.infer<typeof CurrencySchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

// ---------------------------------------------------------------------------
// Per-locale data
// ---------------------------------------------------------------------------

const RAW: Record<Locale, Country> = {
  "es-PE": {
    locale: "es-PE",
    isoCountry: "PE",
    pathSegment: "pe",
    displayName: "Perú",
    locality: "Lima",
    currency: { code: "PEN", symbol: "S/", intlLocale: "es-PE" },
    jurisdiction: {
      country: "Perú",
      courts: "Lima",
      governingLawPhrase: "las leyes del Perú",
    },
    privacyLaw: {
      citation: "Ley 29733 de Protección de Datos Personales",
      jurisdictionLabel: "del Perú",
    },
    payments: [
      { id: "yape", label: "Yape" },
      { id: "plin", label: "PLIN" },
      { id: "transferencia", label: "transferencia" },
      { id: "tarjeta", label: "tarjeta" },
    ],
    whatsappCountryCode: "51",
    ogLocale: "es_PE",
  },
  "es-MX": {
    locale: "es-MX",
    isoCountry: "MX",
    pathSegment: "mx",
    displayName: "México",
    locality: "Ciudad de México",
    currency: { code: "MXN", symbol: "MX$", intlLocale: "es-MX" },
    jurisdiction: {
      country: "México",
      courts: "la Ciudad de México",
      governingLawPhrase: "las leyes de los Estados Unidos Mexicanos",
    },
    privacyLaw: {
      citation:
        "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
      jurisdictionLabel: "de México",
    },
    payments: [
      { id: "spei", label: "SPEI" },
      { id: "tarjeta", label: "tarjeta" },
      { id: "oxxo", label: "OXXO" },
      { id: "mercadopago", label: "MercadoPago" },
    ],
    whatsappCountryCode: "52",
    ogLocale: "es_MX",
  },
  "es-AR": {
    locale: "es-AR",
    isoCountry: "AR",
    pathSegment: "ar",
    displayName: "Argentina",
    locality: "Buenos Aires",
    currency: { code: "ARS", symbol: "AR$", intlLocale: "es-AR" },
    jurisdiction: {
      country: "Argentina",
      courts: "la Ciudad Autónoma de Buenos Aires",
      governingLawPhrase: "las leyes de la República Argentina",
    },
    privacyLaw: {
      citation: "Ley 25.326 de Protección de los Datos Personales",
      jurisdictionLabel: "de Argentina",
    },
    payments: [
      { id: "mercadopago", label: "MercadoPago" },
      { id: "transferencia", label: "transferencia" },
      { id: "tarjeta", label: "tarjeta" },
    ],
    whatsappCountryCode: "54",
    ogLocale: "es_AR",
  },
  "es-CO": {
    locale: "es-CO",
    isoCountry: "CO",
    pathSegment: "co",
    displayName: "Colombia",
    locality: "Bogotá",
    currency: { code: "COP", symbol: "COP", intlLocale: "es-CO" },
    jurisdiction: {
      country: "Colombia",
      courts: "Bogotá",
      governingLawPhrase: "las leyes de la República de Colombia",
    },
    privacyLaw: {
      citation: "Ley 1581 de Protección de Datos Personales",
      jurisdictionLabel: "de Colombia",
    },
    payments: [
      { id: "pse", label: "PSE" },
      { id: "nequi", label: "Nequi" },
      { id: "tarjeta", label: "tarjeta" },
      { id: "transferencia", label: "transferencia" },
    ],
    whatsappCountryCode: "57",
    ogLocale: "es_CO",
  },
  "es-CL": {
    locale: "es-CL",
    isoCountry: "CL",
    pathSegment: "cl",
    displayName: "Chile",
    locality: "Santiago",
    currency: { code: "CLP", symbol: "CLP", intlLocale: "es-CL" },
    jurisdiction: {
      country: "Chile",
      courts: "Santiago",
      governingLawPhrase: "las leyes de la República de Chile",
    },
    privacyLaw: {
      citation: "Ley 19.628 sobre Protección de la Vida Privada",
      jurisdictionLabel: "de Chile",
    },
    payments: [
      { id: "webpay", label: "Webpay" },
      { id: "transferencia", label: "transferencia" },
      { id: "tarjeta", label: "tarjeta" },
    ],
    whatsappCountryCode: "56",
    ogLocale: "es_CL",
  },
};

// Validate every entry at module load. Zod schema below parses the entire
// record so there's no `as` cast — `z.infer<typeof CountriesSchema>` is exactly
// `Record<Locale, Country>`. Failure = build/start error.
const CountriesSchema = z.object({
  "es-PE": CountrySchema,
  "es-MX": CountrySchema,
  "es-AR": CountrySchema,
  "es-CO": CountrySchema,
  "es-CL": CountrySchema,
});

const PARSED = CountriesSchema.parse(RAW);

for (const locale of SUPPORTED_LOCALES) {
  const entry = PARSED[locale];
  if (entry.locale !== locale) {
    throw new Error(
      `COUNTRIES["${locale}"].locale mismatch: ${entry.locale}`,
    );
  }
  if (entry.pathSegment !== localeToPath(locale)) {
    throw new Error(
      `COUNTRIES["${locale}"].pathSegment mismatch with LOCALE_TO_PATH`,
    );
  }
}

export const COUNTRIES: Readonly<Record<Locale, Country>> = Object.freeze({
  "es-PE": Object.freeze(PARSED["es-PE"]),
  "es-MX": Object.freeze(PARSED["es-MX"]),
  "es-AR": Object.freeze(PARSED["es-AR"]),
  "es-CO": Object.freeze(PARSED["es-CO"]),
  "es-CL": Object.freeze(PARSED["es-CL"]),
});

export function getCountry(locale: Locale): Country {
  return COUNTRIES[locale];
}

/**
 * Compose an inline payment method list with Spanish punctuation.
 * Example: ["Yape","PLIN","transferencia"] → "Yape, PLIN y transferencia".
 */
export function joinPayments(country: Country, take?: number): string {
  const labels = country.payments.slice(0, take ?? country.payments.length).map((p) => p.label);
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0] ?? "";
  const head = labels.slice(0, -1).join(", ");
  const tail = labels[labels.length - 1] ?? "";
  return `${head} y ${tail}`;
}

export type { LocalePath };
