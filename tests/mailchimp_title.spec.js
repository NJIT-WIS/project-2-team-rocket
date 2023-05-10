const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Define the test case
test('Test Case 1: Test mailchimp Navigation', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-rocket');
  await page.click('text=About ▼');
  await page.click('text=Subscribe');
});

