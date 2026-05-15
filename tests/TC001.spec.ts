//Actual automation test steps / scripts will be written here
import { test } from '@playwright/test';
import { General } from '../lib/General';

test('TC001_Login_Logout', async ({ page }) => {
    const obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});
