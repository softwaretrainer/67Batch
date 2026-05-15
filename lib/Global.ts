//To provide Test Data & object / elements locators related to whole application
import {Page} from '@playwright/test';

export class Global {
    constructor(public page: Page) {
        this.page = page;
    }
//*****************Test Data *********************** */
public url      : string = "https://ctcorphyd.com/SureshIT/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public employeeFirstName : string = "Suresh";
public employeeLastName : string = "Academy";
//*****************Objects / Elements Locators *********************** */
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password : string  = "//input[@name='txtPassword']";
public button_login      : string = "//input[@name='Submit']";
public link_logout       : string = "//a[text()='Logout']";
public frame_empInfo       : string = "//iframe[@id='rightMenu']";
public button_add          : string = "//input[@value='Add']";
public textbox_firstname   : string = "//input[@name='txtEmpFirstName']";
public textbox_lastname    : string = "//input[@name='txtEmpLastName']";
public button_save         : string = "//input[@id='btnEdit']";
}