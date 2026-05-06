import { test } from '@playwright/test';
const env = require('../utils/envExe.js')
const inputdata = require('../utils/input_excel.js')

test('Validate the env file data', async ({ page }) => {
  await page.goto(env.baseURL);

  await page.waitForTimeout(2000);
  await page.fill('#username', env.username);
  await page.fill('#password', env.password);
  await page.waitForTimeout(2000);

  await page.locator("//input[@type='Submit']").click();
  await page.waitForTimeout(2000);
   
  const data = await inputdata.readCell('C:\Users\Sathis Kumar R\Desktop\PLAYWRIGHT\testdata.xlsx');

  await page.locator("//Select[@id='location']").selectOption(data.location);
  await page.waitForTimeout(2000);

  await page.locator("//Select[@id='hotels']").selectOption(data.hotels);
  await page.waitForTimeout(2000);

  await page.locator("//Select[@id='room_type']").selectOption(data.roomType);
  await page.waitForTimeout(2000);   

  await page.locator("//Select[@id='room_nos']").selectOption(data.rooms);
  await page.waitForTimeout(2000);

  await page.locator("//input[@id='datepick_in']").clear();
  await page.locator("//input[@id='datepick_in']").fill(data.checkIn);
  await page.waitForTimeout(2000);

  await page.locator("//input[@id='datepick_out']").clear();
  await page.locator("//input[@id='datepick_out']").fill(data.checkOut);
  await page.waitForTimeout(2000);

  await page.locator("//Select[@id='adult_room']").selectOption(data.adults);
  await page.waitForTimeout(2000);

  await page.locator("//Select[@id='child_room']").selectOption(data.child);
  await page.waitForTimeout(2000);



});
