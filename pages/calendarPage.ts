import { FrameLocator, Locator, Page } from '@playwright/test';

export class DatePickerPage {
    page: Page;
    frameElement: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.frameElement = page.frameLocator('.demo-frame');
    }

    async gotoDatePickerPage() {
        await this.page.goto('https://jqueryui.com/datepicker/');
    }

    async clickDatePicker() {
        await this.frameElement.locator('.hasDatepicker').click();
    }

    async selectCustomDate(daysToAdd: number) {
        const defaultDate = this.frameElement.locator('.ui-datepicker-today > a');
        const currentDateValue = await defaultDate.getAttribute('data-date') || '0';
        let customDate = parseInt(currentDateValue) + daysToAdd;
        const element = `[data-date='${customDate}']`;
        await this.frameElement.locator(element).click();
    }

    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}
