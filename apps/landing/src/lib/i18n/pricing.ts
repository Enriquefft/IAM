/**
 * Pricing SSOT for apps/landing — per-locale, per-tier amount in local currency.
 *
 * Anchored on a USD reference (~$29 / ~$69) but each country gets a manual
 * override so we can present round, intentional numbers in local currency.
 * Argentina especially: FX rates move too fast to derive on the fly.
 *
 * **Pricing review discipline**: when FX moves >10 % against the anchor, the
 * relevant `amount` value in `PRICING_BY_LOCALE` is updated in this file. No
 * other file holds prices.
 */

import { z } from "zod";
import { COUNTRIES, type Country } from "./countries";
import { SUPPORTED_LOCALES, type Locale } from "./locales";

export const PRICING_TIER_IDS = ["esencial", "consultorio", "clinica"] as const;
export type PricingTierId = (typeof PRICING_TIER_IDS)[number];

const TierPricingSchema = z.object({
  /** Numeric amount in `currency.code` units (whole units, not minor units). */
  amount: z.number().nonnegative(),
  /** Period label fragment that follows the price ("/ mes", "siempre"). */
  periodLabel: z.string().min(1),
  /** When true, render `amount` as the local-currency number; else show `freeLabel`. */
  isFree: z.boolean(),
  /** Override price text shown when `isFree` is true (e.g. "Gratis"). */
  freeLabel: z.string().optional(),
});

const LocalePricingSchema = z.object({
  esencial: TierPricingSchema,
  consultorio: TierPricingSchema,
  clinica: TierPricingSchema,
}) satisfies z.ZodType<Record<PricingTierId, z.infer<typeof TierPricingSchema>>>;

export type TierPricing = z.infer<typeof TierPricingSchema>;
export type LocalePricing = z.infer<typeof LocalePricingSchema>;

const RAW: Record<Locale, LocalePricing> = {
  "es-PE": {
    esencial: { amount: 0, periodLabel: "siempre", isFree: true, freeLabel: "Gratis" },
    consultorio: { amount: 109, periodLabel: "/ mes", isFree: false },
    clinica: { amount: 259, periodLabel: "/ mes", isFree: false },
  },
  "es-MX": {
    esencial: { amount: 0, periodLabel: "siempre", isFree: true, freeLabel: "Gratis" },
    consultorio: { amount: 549, periodLabel: "/ mes", isFree: false },
    clinica: { amount: 1249, periodLabel: "/ mes", isFree: false },
  },
  "es-AR": {
    esencial: { amount: 0, periodLabel: "siempre", isFree: true, freeLabel: "Gratis" },
    consultorio: { amount: 35000, periodLabel: "/ mes", isFree: false },
    clinica: { amount: 79000, periodLabel: "/ mes", isFree: false },
  },
  "es-CO": {
    esencial: { amount: 0, periodLabel: "siempre", isFree: true, freeLabel: "Gratis" },
    consultorio: { amount: 119000, periodLabel: "/ mes", isFree: false },
    clinica: { amount: 279000, periodLabel: "/ mes", isFree: false },
  },
  "es-CL": {
    esencial: { amount: 0, periodLabel: "siempre", isFree: true, freeLabel: "Gratis" },
    consultorio: { amount: 29000, periodLabel: "/ mes", isFree: false },
    clinica: { amount: 69000, periodLabel: "/ mes", isFree: false },
  },
};

export const PRICING_BY_LOCALE: Readonly<Record<Locale, LocalePricing>> = Object.freeze(
  Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [
      locale,
      Object.freeze(LocalePricingSchema.parse(RAW[locale])),
    ] as const),
  ) as Record<Locale, LocalePricing>,
);

/**
 * Format a price for display. Returns the localized currency string for paid
 * tiers, or the configured `freeLabel` for free tiers.
 *
 * Whole-unit display (no decimals) — matches the "intentional round number"
 * approach baked into RAW. Negative amounts are an internal error.
 */
export function formatPrice(country: Country, tier: TierPricing): string {
  if (tier.isFree) return tier.freeLabel ?? "Gratis";
  const formatter = new Intl.NumberFormat(country.currency.intlLocale, {
    style: "currency",
    currency: country.currency.code,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  return formatter.format(tier.amount);
}

export function getPricing(locale: Locale, tier: PricingTierId): TierPricing {
  return PRICING_BY_LOCALE[locale][tier];
}

export function formatTierPrice(locale: Locale, tier: PricingTierId): string {
  return formatPrice(COUNTRIES[locale], PRICING_BY_LOCALE[locale][tier]);
}

/**
 * The currency code shown in the "Precios en X" footnote.
 * Mirrors `COUNTRIES[locale].currency.code` — re-exported here so callers
 * importing from `pricing` don't need to also import `countries`.
 */
export function currencyCode(locale: Locale): string {
  return COUNTRIES[locale].currency.code;
}
