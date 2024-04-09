import {  DatePickerPage } from "../pages/calendarPage";

const {test, expect} = require('@playwright/test');

test('Date Picker', async({page}) =>{
    const datePickerPage = new DatePickerPage(page);

    await datePickerPage.gotoDatePickerPage();
    await datePickerPage.clickDatePicker();
    await datePickerPage.selectCustomDate(3);
    await datePickerPage.waitForTimeout(5000);
})