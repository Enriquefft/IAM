import { test, expect } from "@playwright/test";

const TEST_PREFIX = "e2e-pw-";

function testEmail(suffix: string): string {
  return `${TEST_PREFIX}${suffix}-${Date.now()}@example.com`;
}

async function cleanup(email: string): Promise<void> {
  const { neon } = await import("@neondatabase/serverless");
  const dbUrl = process.env["DATABASE_URL"];
  if (!dbUrl) return;
  const sql = neon(dbUrl);
  await sql`DELETE FROM waitlist WHERE email = ${email}`;
}

async function waitForForm(page: import("@playwright/test").Page) {
  // i18n: every page lives under a country prefix; test the default locale.
  await page.goto("/pe/#waitlist");
  await page.waitForLoadState("networkidle");
  await page.waitForSelector("#waitlist", { timeout: 20_000 });
  await page.waitForSelector('[data-slot="select-trigger"]', { state: "visible", timeout: 20_000 });
  await page.waitForSelector('[data-slot="checkbox"]', { state: "visible", timeout: 20_000 });
}

test.describe("waitlist flow", () => {
  test("happy path — submits form, sees success message", async ({ page }) => {
    const email = testEmail("happy");

    try {
      await waitForForm(page);

      await page.fill('[name="name"]', "Test User");
      await page.fill('[name="email"]', email);

      const trigger = page.locator('[data-slot="select-trigger"]');
      await trigger.waitFor({ state: "visible", timeout: 10_000 });
      await trigger.click();
      const listbox = page.getByRole("listbox");
      await listbox.waitFor({ state: "visible", timeout: 10_000 });
      await page.getByRole("option").first().click();

      await page.locator('[data-slot="checkbox"]').click();

      await page.locator('button[type="submit"]').click();

      await expect(page.locator('[role="status"]')).toBeVisible({ timeout: 20_000 });
      await expect(page.locator('[role="status"]')).toContainText("Listo");
    } finally {
      await cleanup(email);
    }
  });

  test("honeypot — non-empty hp silently returns 202, shows success", async ({ page }) => {
    const email = testEmail("honeypot");

    await waitForForm(page);

    await page.evaluate(() => {
      const hp = document.querySelector<HTMLInputElement>('[name="hp"]');
      if (hp) hp.value = "bot-fill";
    });

    await page.fill('[name="email"]', email);

    await page.locator('[data-slot="select-trigger"]').click();
    await page.getByRole("listbox").waitFor({ state: "visible", timeout: 10_000 });
    await page.getByRole("option").nth(1).click();

    await page.locator('[data-slot="checkbox"]').click();

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('[role="status"]')).toBeVisible({ timeout: 20_000 });
  });

  test("validation — shows error for missing required fields", async ({ page }) => {
    await waitForForm(page);

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('[role="alert"]').first()).toBeVisible({ timeout: 10_000 });
  });
});
