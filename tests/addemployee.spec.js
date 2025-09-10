import { test, expect } from '@playwright/test';
import data from "../test data/orangehrm.json"
test('add employee', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
await page.locator("//input[@placeholder='Username']").fill(data.username)
await page.locator("//input[@type='password']").fill(data.password)
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.locator("//span[text()='PIM']").click()
await page.locator("//a[normalize-space(text())='Add Employee']").click()
await page.locator("//input[@placeholder='First Name']").fill(data.firstname)
await page.locator("//input[@placeholder='Middle Name']").fill(data.middlename)
await page.locator("//input[@placeholder='Last Name']").fill(data.lastname)
await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("189845")
await page.locator("//button[contains(.,'Save')]").click()
await expect(page.locator("//a[normalize-space(text())='Employee List']")).toBeVisible()
})