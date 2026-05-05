import { describe, it, expect } from "vitest";
import {
  SUPPORTED_LOCALES,
  SUPPORTED_LOCALE_PATHS,
  DEFAULT_LOCALE,
  DEFAULT_LOCALE_PATH,
  LOCALE_TO_PATH,
  PATH_TO_LOCALE,
  COUNTRIES,
  PRICING_BY_LOCALE,
  PRICING_TIER_IDS,
  parseLocaleFromPath,
  countryCodeToLocale,
  acceptLanguageToLocale,
  localeToOgLocale,
  formatTierPrice,
  pricingFootnote,
  homePageTitle,
  termsGoverningLawParagraph,
} from "../../src/lib/i18n";

describe("locales", () => {
  it("LOCALE_TO_PATH and PATH_TO_LOCALE are inverse", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(PATH_TO_LOCALE[LOCALE_TO_PATH[locale]]).toBe(locale);
    }
    for (const path of SUPPORTED_LOCALE_PATHS) {
      expect(LOCALE_TO_PATH[PATH_TO_LOCALE[path]]).toBe(path);
    }
  });

  it("DEFAULT_LOCALE matches DEFAULT_LOCALE_PATH", () => {
    expect(LOCALE_TO_PATH[DEFAULT_LOCALE]).toBe(DEFAULT_LOCALE_PATH);
  });

  it("localeToOgLocale formats with underscore", () => {
    expect(localeToOgLocale("es-PE")).toBe("es_PE");
    expect(localeToOgLocale("es-MX")).toBe("es_MX");
  });
});

describe("parseLocaleFromPath", () => {
  it("recognizes every supported locale path", () => {
    expect(parseLocaleFromPath("/pe")).toBe("es-PE");
    expect(parseLocaleFromPath("/mx/")).toBe("es-MX");
    expect(parseLocaleFromPath("/ar/demo")).toBe("es-AR");
    expect(parseLocaleFromPath("/co/privacidad")).toBe("es-CO");
    expect(parseLocaleFromPath("/cl")).toBe("es-CL");
  });

  it("returns null for non-locale segments", () => {
    expect(parseLocaleFromPath("/")).toBeNull();
    expect(parseLocaleFromPath("/api/waitlist/signup")).toBeNull();
    expect(parseLocaleFromPath("/og.png")).toBeNull();
    expect(parseLocaleFromPath("/zz")).toBeNull();
  });
});

describe("countryCodeToLocale", () => {
  it("maps direct hits", () => {
    expect(countryCodeToLocale("PE")).toBe("es-PE");
    expect(countryCodeToLocale("MX")).toBe("es-MX");
    expect(countryCodeToLocale("AR")).toBe("es-AR");
    expect(countryCodeToLocale("CO")).toBe("es-CO");
    expect(countryCodeToLocale("CL")).toBe("es-CL");
  });

  it("maps regional best-effort", () => {
    expect(countryCodeToLocale("BO")).toBe("es-AR");
    expect(countryCodeToLocale("EC")).toBe("es-CO");
    expect(countryCodeToLocale("CR")).toBe("es-MX");
  });

  it("returns null for unsupported and falsy", () => {
    expect(countryCodeToLocale("US")).toBeNull();
    expect(countryCodeToLocale("FR")).toBeNull();
    expect(countryCodeToLocale("")).toBeNull();
    expect(countryCodeToLocale(null)).toBeNull();
    expect(countryCodeToLocale(undefined)).toBeNull();
  });
});

describe("acceptLanguageToLocale", () => {
  it("matches direct supported region tags", () => {
    expect(acceptLanguageToLocale("es-PE")).toBe("es-PE");
    expect(acceptLanguageToLocale("es-MX,es;q=0.9")).toBe("es-MX");
    expect(acceptLanguageToLocale("en;q=0.5,es-CL;q=0.9")).toBe("es-CL");
  });

  it("respects q-order", () => {
    expect(acceptLanguageToLocale("es-AR;q=0.5,es-CO;q=0.9")).toBe("es-CO");
  });

  it("returns null when no Spanish region tag is recognized", () => {
    expect(acceptLanguageToLocale("en-US,en;q=0.9")).toBeNull();
    expect(acceptLanguageToLocale("es")).toBeNull();
    expect(acceptLanguageToLocale("")).toBeNull();
    expect(acceptLanguageToLocale(null)).toBeNull();
  });

  it("falls back to regional best-effort for non-supported es-XX", () => {
    expect(acceptLanguageToLocale("es-BO")).toBe("es-AR");
    expect(acceptLanguageToLocale("es-EC")).toBe("es-CO");
  });
});

describe("COUNTRIES SSOT", () => {
  it("has an entry for every locale", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(COUNTRIES[locale]).toBeDefined();
      expect(COUNTRIES[locale].locale).toBe(locale);
    }
  });

  it("path segments match LOCALE_TO_PATH", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(COUNTRIES[locale].pathSegment).toBe(LOCALE_TO_PATH[locale]);
    }
  });

  it("ogLocale uses underscore form", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(COUNTRIES[locale].ogLocale).toBe(localeToOgLocale(locale));
    }
  });

  it("every country has at least 2 payment methods", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(COUNTRIES[locale].payments.length).toBeGreaterThanOrEqual(2);
    }
  });
});

describe("PRICING_BY_LOCALE SSOT", () => {
  it("has every tier for every locale", () => {
    for (const locale of SUPPORTED_LOCALES) {
      for (const tier of PRICING_TIER_IDS) {
        expect(PRICING_BY_LOCALE[locale][tier]).toBeDefined();
      }
    }
  });

  it("esencial tier is free everywhere", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(PRICING_BY_LOCALE[locale].esencial.isFree).toBe(true);
    }
  });

  it("paid tiers have positive amounts", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(PRICING_BY_LOCALE[locale].consultorio.amount).toBeGreaterThan(0);
      expect(PRICING_BY_LOCALE[locale].clinica.amount).toBeGreaterThan(0);
    }
  });
});

describe("formatTierPrice", () => {
  it("formats free tier with freeLabel", () => {
    expect(formatTierPrice("es-PE", "esencial")).toBe("Gratis");
  });

  it("PE formats as PEN", () => {
    const text = formatTierPrice("es-PE", "consultorio");
    expect(text).toContain("S/");
    expect(text).toContain("109");
  });

  it("MX formats as MXN", () => {
    const text = formatTierPrice("es-MX", "consultorio");
    expect(text).toContain("$");
    expect(text).toContain("549");
  });

  it("AR formats as ARS", () => {
    const text = formatTierPrice("es-AR", "consultorio");
    expect(text).toContain("$");
    expect(text).toMatch(/35[\.,]?000/);
  });

  it("CO formats as COP", () => {
    const text = formatTierPrice("es-CO", "consultorio");
    expect(text).toMatch(/119[\.,]?000/);
  });

  it("CL formats as CLP", () => {
    const text = formatTierPrice("es-CL", "consultorio");
    expect(text).toMatch(/29[\.,]?000/);
  });
});

describe("country-keyed copy", () => {
  it("pricing footnote includes correct currency code", () => {
    expect(pricingFootnote("es-PE")).toContain("PEN");
    expect(pricingFootnote("es-MX")).toContain("MXN");
    expect(pricingFootnote("es-AR")).toContain("ARS");
    expect(pricingFootnote("es-CO")).toContain("COP");
    expect(pricingFootnote("es-CL")).toContain("CLP");
  });

  it("pricing footnote includes country payment methods", () => {
    expect(pricingFootnote("es-PE")).toContain("Yape");
    expect(pricingFootnote("es-MX")).toContain("SPEI");
    expect(pricingFootnote("es-AR")).toContain("MercadoPago");
    expect(pricingFootnote("es-CO")).toContain("PSE");
    expect(pricingFootnote("es-CL")).toContain("Webpay");
  });

  it("home page titles drop 'LatAm' and use country name", () => {
    for (const locale of SUPPORTED_LOCALES) {
      const title = homePageTitle(locale);
      expect(title).not.toMatch(/LatAm/i);
      expect(title).toContain(COUNTRIES[locale].displayName);
    }
  });

  it("terms governing law cites country jurisdiction", () => {
    expect(termsGoverningLawParagraph("es-PE")).toContain("Perú");
    expect(termsGoverningLawParagraph("es-MX")).toContain("Mexicanos");
    expect(termsGoverningLawParagraph("es-AR")).toContain("Argentina");
    expect(termsGoverningLawParagraph("es-CO")).toContain("Colombia");
    expect(termsGoverningLawParagraph("es-CL")).toContain("Chile");
  });
});
