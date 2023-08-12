import { URL } from "../../config.mjs";
const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto(URL + '/boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  