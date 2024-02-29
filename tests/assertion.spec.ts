import { expect, test } from '@playwright/test';

test('assertion demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    //assertions
    //check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    //with condition
    //element handle - $ (finds an element matching the specified selector within the page)
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click(); 
    }

    //check element hidden or not
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //soft assertion: to continue to next test even though a test failure occurs
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    // await expect.soft(page.locator('text=The Kitchen')).not.toHaveValue('The Kitchen') //negated assertion
    
    await page.pause()

    //check attribute - class, id..
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/) //regular exp: here anything can come b4 css

    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')
    //using regular expression
    await expect(page).toHaveTitle(/.*Kitchen/)


    await page.pause()

    //visual validation with screenshot
    await expect(page).toHaveScreenshot() //takes scrnsht and stores inside proj and for the nxt run it will compare against that shot.





   
})