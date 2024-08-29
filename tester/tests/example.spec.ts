import { test, expect } from '@playwright/test';
import path from 'path';


const authFile = path.resolve(__dirname, '/playwright/.auth/user.json')
test('Test Login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button', { name: 'google logo เข้าสู่ระบบ' }).click();
  await page.getByLabel('Email or phone').fill('email....');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Enter your password').fill('pass...');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();
  await page.getByRole('button',{name : 'View notifications' }).click();
  await page.getByRole('button',{name : 'View notifications' }).click();

  
  // Save authentication state
  await page.context().storageState({ path: authFile });

  await page.getByRole('button',{name: 'Open menu User profile'}).click();
  await page.getByRole('button',{name: 'ออกจากระบบ'}).click();
});