const {test, expect} = require('@playwright/test')
const { chromium } = require('playwright');

const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

test('Test Case 1: Test mailchimp navigation', async ({ page }) => {
    await page.goto('https://njit-wis.github.io/project-2-team-rocket');
    await page.getByText('About ▼').click();
    await page.getByRole('link', { name: 'Subscribe' }).click();

});
