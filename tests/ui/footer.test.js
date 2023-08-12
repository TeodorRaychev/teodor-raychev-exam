import { URL } from "../../config.mjs";
const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto(URL);  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
  });
  