import { test, expect } from '@playwright/test';

test('test google home page', async ({page}) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
})