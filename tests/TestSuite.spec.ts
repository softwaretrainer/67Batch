import { test } from '@playwright/test';
import { General } from '../lib/General';

test.describe('Test Suite', () => {
  test('TC001_Login_Logout', async ({ page }) => {
      const obj = new General(page);
      await obj.openApplication();
      await obj.login();
      await obj.logout();
  });  
  test('TC002_AddNewEmployee', async ({ page }) => {
      const obj = new General(page);
      await obj.openApplication();
      await obj.login();
      await obj.addNewEmployee();
      await obj.logout();
  });
});