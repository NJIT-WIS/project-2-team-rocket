const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

cost config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 90000;

async function navigateMailchimp(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  await page.click('text=Sign Up to Volunteer');

  const pageContent = await page.textContent('body');
  await expect(pageContent).toContain('Volunteer Form');
}

pages.forEach((page) => {


  test(`Page "${page.path}" should have subscribe button`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await navigateMailchimp(pageUrl);
  });
});


