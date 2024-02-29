import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test.describe.configure({
    mode: "parallel",
})

test('parallel1', async ({ page }) => {
  console.log('p1 start');
  await setTimeout(3000)
  console.log('p1 end');
});

test('parallel2', async ({ page }) => {
    console.log('p2 start');
    await setTimeout(3000)
    console.log('p2 end');
  });