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
      // Home-level pages: x-default → root "/" (international hub).
      const xDefault = await page
        .locator('link[rel="alternate"][hreflang="x-default"]')
        .getAttribute("href");
      expect(xDefault).toMatch(/^https:\/\/i-am\.clinic\/?$/);

      // og:locale matches BCP 47 with underscore separator.
      const ogLocale = await page
        .locator('meta[property="og:locale"]')
        .getAttribute("content");
      expect(ogLocale).toBe(fx.bcp47.replace("-", "_"));
    });
  }
});

test.describe("root / — humans get redirected, crawlers get content", () => {
  test("human UA: / redirects to a locale-prefixed page", async ({ page }) => {
    const response = await page.goto("/");
    const finalUrl = page.url();
    expect(response?.status() ?? 0).toBeGreaterThanOrEqual(200);
    expect(finalUrl).toMatch(/\/(pe|mx|ar|co|cl)(\/|$)/);
  });

  test("Googlebot UA: / serves content with self-canonical and x-default → /", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get("/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      maxRedirects: 0,
    });
    expect(response.status()).toBe(200);
    const html = await response.text();
    // Default-locale (PE) content rendered at root.
    expect(html).toContain("Yape");
    // Canonical points at root, not /pe.
    expect(html).toMatch(/<link\s+rel="canonical"\s+href="https:\/\/i-am\.clinic\/"/);
    // x-default points at root.
    expect(html).toMatch(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="https:\/\/i-am\.clinic\/"/,
    );
    // Vary header advertises UA-aware response.
    expect(response.headers()["vary"]).toContain("User-Agent");
    // Sanity: baseURL exists so request resolved.
    expect(baseURL).toBeTruthy();
  });

  test("facebookexternalhit UA: / serves content (link preview path)", async ({
    request,
  }) => {
    const response = await request.get("/", {
      headers: {
        "User-Agent":
          "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
      },
      maxRedirects: 0,
    });
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain("og:title");
  });

  test("hreflang on /: 5 locale alternates plus x-default", async ({ request }) => {
    const response = await request.get("/", {
      headers: { "User-Agent": "Googlebot/2.1" },
      maxRedirects: 0,
    });
    const html = await response.text();
    const matches = html.match(/<link\s+rel="alternate"\s+hreflang=/g) ?? [];
    expect(matches.length).toBeGreaterThanOrEqual(6);
  });

  test("Chrome UA via raw request: / returns 302 with Location", async ({
    request,
  }) => {
    const response = await request.get("/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      maxRedirects: 0,
    });
    expect(response.status()).toBe(302);
    const location = response.headers()["location"] ?? "";
    expect(location).toMatch(/^\/(pe|mx|ar|co|cl)(\/|$|\?)/);
  });
});
