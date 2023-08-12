import { URL } from "../../config.mjs";
const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto(URL + '/add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  