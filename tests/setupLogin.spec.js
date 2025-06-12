import { test } from '@playwright/test';
import { testData } from '../data/testData.js';
import { LoginPage } from '../pageObject/LoginPage.js';

test('Login and save storage state', async ({ page, context }) => {
  await page.goto(testData.url);
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.username, testData.password);
  await page.waitForURL('**/dashboard/index');

  await context.storageState({ path: 'storage/auth.json' });
  console.log('Storage state saved to storage/auth.json');
});