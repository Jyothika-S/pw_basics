import { test, expect } from '@playwright/test';

const testData = JSON.parse(JSON.stringify(require('../test-data/testdata.json')));

// test('login to app', async({page}) => {
//     await page.goto('https://www.saucedemo.com/')
//     page.pause();
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');

//     //calling from json
//     await page.locator('[data-test="username"]').fill(testData.username);
//     await page.locator('[data-test="password"]').fill(testData.password);
// })

test.describe('data driven login test', function() {
    //parameterization through data driven test
    for(const data of testData)
    {
        test.describe(`login with users from json ${data.id}`, function() //took id's to avoid duplications
        { 
            test('login to application', async({page}) => {
                await page.goto('https://www.saucedemo.com/')
                //calling from json
                await page.locator('[data-test="username"]').fill(data.username);
                await page.locator('[data-test="password"]').fill(data.password);
            })
        })
    }
})