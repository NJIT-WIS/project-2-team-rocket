const { test, expect } = require('@playwright/test');
const { chromium, webkit } = require('playwright');

// Configure Playwright to use the appropriate browser
const browserName = process.env.BROWSER || 'chromium';

// Define the test case
test('Test Case 1: Test mailchimp Navigation', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-rocket');
  await page.click('text=About ▼');
  await page.click('text=Subscribe');
});

// Run the test
(async () => {
  const browser = await { chromium, webkit }[browserName].launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await test.run({
      page,
    });
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await context.close();
    await browser.close();
  }
})();
