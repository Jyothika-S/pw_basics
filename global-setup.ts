import { Browser, Page, chromium } from "@playwright/test";

async function globalSetup() {
    interface LoginPage {
        gotoLoginPage: () => Promise<void>;
        login: (username: string, password: string) => Promise<void>;
    }

    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    const username_textbox = page.getByLabel('Username')
    const password_textbox = page.getByLabel('Password')
    await page.goto('https://the-internet.herokuapp.com/login')
    await username_textbox.fill("test")
    await password_textbox.fill("test")
    await page.locator('button:has-text(" Login")');

    await page.context().storageState({ path: 'loginAuth.json'});
    await browser.close();
}

export default globalSetup;