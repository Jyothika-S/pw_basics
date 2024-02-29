import { test, chromium } from '@playwright/test';

test('without fixture', async () => {

    //create a chrome browser
    const browser = await chromium.launch();

    //create isolated context
    const context = await browser.newContext();

    //create a page
    const page = await context.newPage();
    await page.goto("https://www.google.com/");

    //use context to remove cookies
    console.log(await context.cookies());  //fetch cookies
    await context.clearCookies();  //clear cookies
    console.log("After clearing: ", await context.cookies());

    await page.pause();

    //create another browser context
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://demo.playwright.dev/todomvc/#/');

    //make request
    const req = await page.request.get("https://jsonplaceholder.typicode.com/todos/1");
    const res = await req.json();
    console.log("result: ", res);

    //browser name
    // console.log(await browser._name);
    console.log((await browser as any)._name);
})

test('with fixture', async ({ page, context, browser, request, browserName }) => {
    await page.goto("https://www.google.com/");

    //use context to remove cookies
    console.log(await context.cookies());  //fetch cookies
    await context.clearCookies();  //clear cookies
    console.log("After clearing: ", await context.cookies());

    await page.pause();

    //create another browser context
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://demo.playwright.dev/todomvc/#/');

    //make request
    const req = await request.get("https://jsonplaceholder.typicode.com/todos/1");
    const res = await req.json();
    console.log("result: ", res);

    //browser name
    // console.log(await browser._name);
    console.log(await browserName);
})