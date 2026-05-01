import { test, expect } from '@playwright/test';

test('Verify Landing Page and Modals', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Verify Header
  await expect(page.locator('header')).toBeVisible();

  // Verify Trailer Grid text color (should be white now)
  const trailerTitle = page.locator('h4').first();
  await expect(trailerTitle).toBeVisible();

  // Verify App Gallery Section
  await expect(page.getByText('App Gallery')).toBeVisible();

  // Verify Footer on Main Page
  await expect(page.locator('footer')).toBeVisible();

  // Open a Modal (e.g., Privacy)
  await page.getByRole('button', { name: 'Privacy' }).first().click();

  // Verify Modal Content Area has white background
  const modalContent = page.locator('.flex-grow.bg-white');
  await expect(modalContent).toBeVisible();

  // Verify Footer is also in Modal
  const modalFooter = page.locator('footer').last();
  await expect(modalFooter).toBeVisible();

  // Close Modal
  await page.getByLabel('Close modal').click();
  await expect(page.locator('[role="dialog"]')).not.toBeVisible();
});
