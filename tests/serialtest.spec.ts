import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test.describe.configure({
    mode: "serial",
    timeout: 10000
})

test('serial1', async ({ page }) => {
  console.log('s1 start');
  await setTimeout(3000)
  console.log('s1 end');
});

test('serial2', async ({ page }) => {
    console.log('s2 start');
    await setTimeout(3000)
    console.log('s2 end');
  });