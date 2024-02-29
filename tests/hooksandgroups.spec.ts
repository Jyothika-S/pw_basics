import { test, expect } from '@playwright/test';

test.describe('all tests', () => {

    // test('login', async ({page}) => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/')

        // await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        // await page.pause()
        // await page.close(); //cmntd since login test has made common
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('homepage', async ({ page }) => {
        //removed login since it has been made common
        // await page.goto('https://www.saucedemo.com/v1/')
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();
        // await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');

        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Sauce Labs Onesie' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        // await page.pause()
        // await page.close()
    })

    test('logout', async ({ page }) => {
        //removed login since it has been made common
        // await page.goto('https://www.saucedemo.com/v1/')
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();
        // await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
        // await page.pause()

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.getByText('LOGIN Accepted usernames are').click();
        // await page.close();
    })

})
