import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageObject/DashboardPage.js';
import { testData } from '../data/testData.js';

test.use({ storageState: 'storage/auth.json' });

test.describe('Dashboard Tabs Visibility', () => {
  for (const { name, expectedUrl } of testData.tabTests) {
    test(`${name} tab is visible and navigates correctly`, async ({ page }) => {
      await page.goto('/web/index.php/dashboard/index');
      const dashboard = new DashboardPage(page);
      const menuItem = dashboard.getMenuItem(name);
      await expect(menuItem, `${name} menu should be visible`).toBeVisible();
      await menuItem.click();
      await expect(page).toHaveURL(expectedUrl);
    });
  }
});