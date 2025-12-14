import { test, expect } from '@playwright/test';

test('Търсене на продукт в TesterBud', async ({ page }) => {
  await page.goto('https://testerbud.com/practice-ecommerece-website');

  // Изчакваме полето за търсене
  const searchInput = page.locator('input[type="search"]');
  await searchInput.waitFor({ state: 'visible', timeout: 10000 });

  // Попълваме търсенето
  await searchInput.fill('Laptop');

  // Проверяваме дали резултатите съдържат "Laptop"
  const productTitle = page.locator('div.mb-2.card-title.h5');
  await expect(productTitle).toContainText('Laptop Pro');
});