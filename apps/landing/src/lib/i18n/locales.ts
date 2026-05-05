/**
 * Locale SSOT for apps/landing.
 *
 * Two parallel representations:
 * - {@link Locale}: BCP 47 tag (es-PE, es-MX, …). Used for `<html lang>`, OG
 *   `og:locale`, `inLanguage` JSON-LD, `accept-language` matching.
 * - {@link LocalePath}: ISO 3166-1 alpha-2 lowercase (pe, mx, …). Used for URL
 *   prefixes — short, recognizable, SEO-friendly. Matches Astro `i18n.locales`
 *   config in `astro.config.mjs`.
 *
 * Conversions go through `localeToPath` / `pathToLocale`. Never duplicate.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Locales (BCP 47)
// ---------------------------------------------------------------------------

export const SUPPORTED_LOCALES = [
  "es-PE",
  "es-MX",
  "es-AR",
  "es-CO",
  "es-CL",
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es-PE";

const LocaleSchema = z.enum(SUPPORTED_LOCALES);

// ---------------------------------------------------------------------------
// URL path segments (ISO 3166-1 alpha-2 lowercase)
// ---------------------------------------------------------------------------

export const SUPPORTED_LOCALE_PATHS = [
  "pe",
  "mx",
  "ar",
  "co",
  "cl",
] as const;
export type LocalePath = (typeof SUPPORTED_LOCALE_PATHS)[number];

export const DEFAULT_LOCALE_PATH: LocalePath = "pe";

const LocalePathSchema = z.enum(SUPPORTED_LOCALE_PATHS);

// ---------------------------------------------------------------------------
// Bidirectional mapping
// ---------------------------------------------------------------------------

export const LOCALE_TO_PATH: Readonly<Record<Locale, LocalePath>> = {
  "es-PE": "pe",
  "es-MX": "mx",
  "es-AR": "ar",
  "es-CO": "co",
  "es-CL": "cl",
};

export const PATH_TO_LOCALE: Readonly<Record<LocalePath, Locale>> = {
  pe: "es-PE",
  mx: "es-MX",
  ar: "es-AR",
  co: "es-CO",
  cl: "es-CL",
};

// ---------------------------------------------------------------------------
// Conversions and parsing
// ---------------------------------------------------------------------------

export function localeToPath(locale: Locale): LocalePath {
  return LOCALE_TO_PATH[locale];
}

export function pathToLocale(path: LocalePath): Locale {
  return PATH_TO_LOCALE[path];
}

/** Converts a BCP 47 locale tag to OG locale format (underscore separator). */
export function localeToOgLocale(locale: Locale): string {
  return locale.replace("-", "_");
}

/** Returns the BCP 47 region subtag (PE, MX, …) for a locale. */
export function localeToCountryCode(locale: Locale): string {
  const region = locale.split("-")[1];
  if (region === undefined) throw new Error(`malformed locale ${locale}`);
  return region;
}

/**
 * Parse the first path segment of a URL pathname into a Locale.
 * Returns null if the segment is not a supported locale path.
 *
 * Examples:
 *   "/pe"            → "es-PE"
 *   "/mx/demo"       → "es-MX"
 *   "/api/waitlist"  → null  (api is not a locale)
 *   "/"              → null
 */
export function parseLocaleFromPath(pathname: string): Locale | null {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first === undefined) return null;
  const parsed = LocalePathSchema.safeParse(first);
  if (!parsed.success) return null;
  return pathToLocale(parsed.data);
}

/** Runtime narrowing for unknown values reaching API/middleware boundaries. */
export function assertLocale(value: unknown): Locale {
  return LocaleSchema.parse(value);
}

export function isLocale(value: unknown): value is Locale {
  return LocaleSchema.safeParse(value).success;
}

export function isLocalePath(value: unknown): value is LocalePath {
  return LocalePathSchema.safeParse(value).success;
}

/**
 * Map an ISO 3166-1 alpha-2 country code (uppercase, e.g., from
 * `x-vercel-ip-country`) to the closest supported locale.
 *
 * Direct hits: PE/MX/AR/CO/CL → exact locale.
 * Best-effort regional matches for nearby countries that lack their own
 * locale (we'd rather show them a Spanish neighbor than fall through to
 * `accept-language` and risk an English match).
 */
const COUNTRY_TO_LOCALE: Readonly<Record<string, Locale>> = {
  // Direct hits
  PE: "es-PE",
  MX: "es-MX",
  AR: "es-AR",
  CO: "es-CO",
  CL: "es-CL",
  // Regional best-effort
  BO: "es-AR",
  PY: "es-AR",
  UY: "es-AR",
  EC: "es-CO",
  VE: "es-CO",
  CR: "es-MX",
  GT: "es-MX",
  HN: "es-MX",
  NI: "es-MX",
  PA: "es-MX",
  SV: "es-MX",
  DO: "es-MX",
  CU: "es-MX",
  PR: "es-MX",
};

export function countryCodeToLocale(country: string | null | undefined): Locale | null {
  if (typeof country !== "string" || country.length === 0) return null;
  const upper = country.toUpperCase();
  return COUNTRY_TO_LOCALE[upper] ?? null;
}

/**
 * Parse `accept-language` header and return the best supported locale match,
 * or null if no Spanish region tag is recognized.
 *
 * Strategy:
 * 1. Walk header tags in q-order (highest first).
 * 2. For each `es-XX`, if XX is a supported region, return that locale.
 * 3. Bare `es` falls through to caller (caller decides default).
 */
export function acceptLanguageToLocale(header: string | null | undefined): Locale | null {
  if (typeof header !== "string" || header.length === 0) return null;

  const tags = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.split("=")[1] ?? "1") : 1;
      return { tag: tag.trim(), q: Number.isFinite(q) ? q : 1 };
    })
    .filter((t) => t.tag.length > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const [primary, region] = tag.split("-");
    if (primary?.toLowerCase() !== "es") continue;
    if (region === undefined) continue;
    const locale = countryCodeToLocale(region);
    if (locale !== null) return locale;
  }
  return null;
}
