import { test, expect, type Page } from "@playwright/test";

interface LocaleFixture {
  readonly path: "pe" | "mx" | "ar" | "co" | "cl";
  readonly bcp47: "es-PE" | "es-MX" | "es-AR" | "es-CO" | "es-CL";
  readonly currencyCode: "PEN" | "MXN" | "ARS" | "COP" | "CLP";
  readonly displayName: string;
  readonly paymentSample: string;
}

const LOCALES: ReadonlyArray<LocaleFixture> = [
  { path: "pe", bcp47: "es-PE", currencyCode: "PEN", displayName: "Perú", paymentSample: "Yape" },
  { path: "mx", bcp47: "es-MX", currencyCode: "MXN", displayName: "México", paymentSample: "SPEI" },
  { path: "ar", bcp47: "es-AR", currencyCode: "ARS", displayName: "Argentina", paymentSample: "MercadoPago" },
  { path: "co", bcp47: "es-CO", currencyCode: "COP", displayName: "Colombia", paymentSample: "PSE" },
  { path: "cl", bcp47: "es-CL", currencyCode: "CLP", displayName: "Chile", paymentSample: "Webpay" },
];

async function homeContent(page: Page): Promise<string> {
  return page.locator("body").innerText();
}

test.describe("i18n smoke — every locale renders its country truth", () => {
  for (const fx of LOCALES) {
    test(`${fx.path} (${fx.bcp47}) — currency, payment, lang, hreflang`, async ({ page }) => {
      const response = await page.goto(`/${fx.path}/`);
      expect(response?.status() ?? 0).toBeGreaterThanOrEqual(200);
      expect(response?.status() ?? 0).toBeLessThan(400);

      // <html lang="es-XX"> uses BCP 47.
      const lang = await page.locator("html").getAttribute("lang");
      expect(lang).toBe(fx.bcp47);

      const body = await homeContent(page);
      expect(body).toContain(fx.currencyCode);
      expect(body).toContain(fx.paymentSample);

      // hreflang block: 5 alternates + x-default.
      const hreflangCount = await page.locator('link[rel="alternate"][hreflang]').count();
      expect(hreflangCount).toBeGreaterThanOrEqual(6);
      const xDefault = await page
        .locator('link[rel="alternate"][hreflang="x-default"]')
        .getAttribute("href");
      expect(xDefault).toContain("/pe");

      // og:locale matches BCP 47 with underscore separator.
      const ogLocale = await page
        .locator('meta[property="og:locale"]')
        .getAttribute("content");
      expect(ogLocale).toBe(fx.bcp47.replace("-", "_"));
    });
  }
});

test.describe("root redirect — / lands the user on a supported locale", () => {
  test("GET / redirects to a locale-prefixed page", async ({ page }) => {
    const response = await page.goto("/");
    const finalUrl = page.url();
    expect(response?.status() ?? 0).toBeGreaterThanOrEqual(200);
    expect(finalUrl).toMatch(/\/(pe|mx|ar|co|cl)(\/|$)/);
  });
});
