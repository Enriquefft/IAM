/**
 * Barrel export for the i18n SSOT.
 *
 * Most consumers should import from this module rather than reaching into
 * sub-files: `import { COUNTRIES, formatTierPrice, parseLocaleFromPath } from "@/lib/i18n";`
 */

export {
  SUPPORTED_LOCALES,
  SUPPORTED_LOCALE_PATHS,
  DEFAULT_LOCALE,
  DEFAULT_LOCALE_PATH,
  LOCALE_TO_PATH,
  PATH_TO_LOCALE,
  localeToPath,
  pathToLocale,
  localeToOgLocale,
  localeToCountryCode,
  parseLocaleFromPath,
  assertLocale,
  isLocale,
  isLocalePath,
  countryCodeToLocale,
  acceptLanguageToLocale,
} from "./locales";
export type { Locale, LocalePath } from "./locales";

export {
  COUNTRIES,
  getCountry,
  joinPayments,
} from "./countries";
export type { Country, Currency, PaymentMethod } from "./countries";

export {
  PRICING_BY_LOCALE,
  PRICING_TIER_IDS,
  formatPrice,
  formatTierPrice,
  getPricing,
  currencyCode,
} from "./pricing";
export type { PricingTierId, TierPricing, LocalePricing } from "./pricing";

export { localeRoot, localizePath, localeAnchor } from "./links";

export {
  pricingFootnote,
  compactPaymentList,
  paymentSummary,
  footerTagline,
  footerCopyright,
  equipoLocalityPhrase,
  privacyAboutParagraph,
  privacyRightsLawClause,
  legalContactLine,
  termsServiceParagraph,
  termsGoverningLawParagraph,
  faqPsychiatryAnswer,
  faqDataProtectionAnswer,
  homePageTitle,
  privacyPageDescription,
  ogTagline,
  ogContactLine,
  localeDisplayName,
  waitlistEmailCopy,
  waitlistEmailPlainText,
} from "./copy";
export type { WaitlistEmailCopy } from "./copy";
