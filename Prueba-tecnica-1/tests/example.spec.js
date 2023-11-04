// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"

test('app show random fatc and image', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  const text = await page.getByRole("paragraph");
  const img = await page.getByRole("img");

  const textContent = await text.textContent()
  const imgURL = await img.getAttribute("src")

  await expect(textContent).not.toBeNull()
  await expect(imgURL?.startsWith('https://cataas.com')).toBeTruthy()
});


