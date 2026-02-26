import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke", () => {
  test("loads and shows main content", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /hi, i'm your name/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /view my work/i })).toBeVisible();
  });

  test("navigation links work", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /about/i }).first().click();
    await expect(page.getByRole("heading", { name: /about me/i })).toBeVisible();
  });
});
