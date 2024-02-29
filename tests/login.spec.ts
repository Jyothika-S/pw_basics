import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

//Page Obj Model
test('login test', async ({ page }) => {
    //create an instance of LoginPage
    const login = new LoginPage(page);

    await login.gotoLoginPage()
    await login.login('tomsmit', 'SuperStrongPassword!')

    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('Username').click();
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();
  });