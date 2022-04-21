import { test } from "@playwright/test";
import { cognitoSuccess, getGraph, getMeSuccess } from "./mocks";

test("As a normal user, I am able to visit main page and will be redirect to login page.", async ({
  page,
}) => {
  await cognitoSuccess(page);

  // Go to https://heartbeat.sandbox.predictablexp.com/
  await page.goto("https://heartbeat.sandbox.predictablexp.com/");

  // Go to https://heartbeat.sandbox.predictablexp.com/login
  await page.waitForNavigation(/*{ url: 'https://heartbeat.sandbox.predictablexp.com/login' }*/);

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill("pnminh1710+1@gmail.com");

  // Press Tab
  await page.locator('input[name="username"]').press("Tab");

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill("Test1234!");

  // Click text=Login
  await page.locator("text=Login").click();

  // Click input[name="code"]
  await page.locator('input[name="code"]').click();

  // Fill input[name="code"]
  await page.locator('input[name="code"]').fill("931895");

  await getMeSuccess(page);
  await getGraph(page);

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://heartbeat.sandbox.predictablexp.com/' }*/),
    page.locator('input[name="code"]').press("Enter"),
  ]);

  // Click text=Select Time Range
  await page.locator("text=Select Time Range").click();

  // Click div[role="button"]:has-text("Last hour")
  await page.locator('div[role="button"]:has-text("Last hour")').click();

  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://heartbeat.sandbox.predictablexp.com/reports/' }*/),
    page.locator("data-testid=BarChartIcon").click(),
  ]);

  // Click text=Select Time Range
  await page.locator("text=Select Time Range").click();

  // Click div[role="button"]:has-text("Last 7 days")
  await page.locator('div[role="button"]:has-text("Last 7 days")').click();

  // Click text=Export Report
  await page.locator("text=Export Report").click();

  // // Click text=Click to download file
  // await Promise.all([
  //   page.waitForEvent("download"),
  //   page.locator("text=Click to download file").click(),
  // ]);
});
