import { expect, test } from '@playwright/test';

test.skip('test to skip', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
  
    // // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
  });

//fail
//will show error if the test does not fail
// test('test not ready', async ({page}) => {
//     test.fail();
// })

//fixme
//will be aborted
test.fixme('test to be fixed', async ({page}) => {
    await page.goto('https://playwright.dev/');
    test.slow();
})

//slow
//triples timeout
test('slow test', async({page}) => {
    await page.goto('https://www.google.com/');
    test.slow();
})

//only
//runs only a particular test
// test.only('only this test', async({page}) => {
//     await page.goto('https://www.google.com/')
//     await expect(page).toHaveTitle('Google')
// })

//conditionally skip a test
test('skip this test', async ({ page, browserName }) => {
    await page.goto('https://www.google.com/')
    test.skip(browserName === 'firefox', 'Still working on it');
});

//tags
test('login page @fast', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
    await page.close();
})

test('tag example2 @slow', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
    // await expect(page).toHaveTitle(/Playwright/);
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
})


