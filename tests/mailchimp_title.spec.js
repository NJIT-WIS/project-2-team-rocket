const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

// Define the test case
test('Test Case 1: Test mailchimp Navigation', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-rocket');
  await page.click('text=About ▼');
  await page.click('text=Subscribe');

});
test('Test Case 2: Check contact form'), async ({ page }) => {
  await page.getByLabel('Email Address *').click();
  await page.getByLabel('Email Address *').fill('helloworld@gmail.com');
  await page.getByLabel('Name', { exact: true }).click();
  await page.getByLabel('Name', { exact: true }).fill('hello world');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('732 245 1267');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('hello world');
  await page.getByRole('button', { name: 'Subscribe' }).click();
}

