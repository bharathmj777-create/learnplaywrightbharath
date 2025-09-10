import { test, expect } from '@playwright/test';
import data from "../test data/orangehrm.json"
test('add employee', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
await page.locator("//input[@placeholder='Username']").fill(data.username)
await page.locator("//input[@type='password']").fill(data.password)
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})