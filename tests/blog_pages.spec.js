const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT  30000;
async function goToPageLink(pageUrl, expectedTitle) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
}