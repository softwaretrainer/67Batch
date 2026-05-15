import {test} from '@playwright/test';
import { General } from '../lib/General';

test('TC002_AddNewEmployee', async ({ page }) => {
    const obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.addNewEmployee();
    await obj.logout();
});
