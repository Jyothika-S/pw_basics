import { expect, test } from '@playwright/test';

import userData from '../test-data/userdetails.json';

test.describe('data driven tests using JSON', () =>{
    for(const data of userData)
    {
        test(`create users ${data.FirstName}`, async({page}) =>{
            await page.goto('https://demoqa.com/webtables');
            await page.getByRole('heading', { name: 'Web Tables' }).click();
            await page.getByRole('button', { name: 'Add' }).click();
            await page.getByPlaceholder('First Name').fill(data.FirstName);
            await page.getByPlaceholder('Last Name').fill(data.LastName);
            await page.getByPlaceholder('name@example.com').fill(data.Email);
            await page.getByPlaceholder('Age').fill(data.Age);
            await page.getByPlaceholder('Salary').fill(data.Salary);
            await page.getByPlaceholder('Department').fill(data.Dept);
            await page.getByRole('button', { name: 'Submit' }).click();
        })
    };
    
})