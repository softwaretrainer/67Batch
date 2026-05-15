//To provide all -resuable methods / functions related to whole application
import { Global } from "./Global";
export class General extends Global {
    //*****************Use-defined : Reusable Methods / Functions *********************** */
async openApplication() {
    await this.page.goto(this.url);
    console.log("Application Opened");
}
async login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completed");
}
async logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");
}
async addNewEmployee() {
    const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_firstname).fill(this.employeeFirstName);
    await frame.locator(this.textbox_lastname).fill(this.employeeLastName);
    await frame.locator(this.button_save).click();
    console.log("New Employee Added");
}
}