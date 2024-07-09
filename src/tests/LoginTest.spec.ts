import HomeSteps from "@uiSteps/HomeSteps";
import RegistrationSteps from "@uiSteps/RegistrationSteps";
import { test } from "@base-test";
import Allure from "@allure";
import ExcelUtil from "@utils/ExcelUtil";

const SHEET = "LoginTest";
let home: HomeSteps;
test.beforeEach(async ({ page }) => {
    home = new HomeSteps(page);
});

const data1 = ExcelUtil.getTestData(SHEET, "TC01_ValidLogin");
test(`${data1.TestID} - ${data1.Description}`, async () => {
    Allure.attachDetails(data1.Description, data1.Issue);
    await home.launchApplication();
    await home.login(data1.UserName, data1.Password);
    await home.validateLogin(data1.UserName);
});

const data2 = ExcelUtil.getTestData(SHEET, "TC02_InValidLogin");
test(`${data2.TestID} - ${data2.Description}`, async () => {
    Allure.attachDetails(data2.Description, data2.Issue);
    await home.launchApplication();
    await home.login(data2.UserName, data2.Password);
    await home.validateInvalidLogin(data2.ErrorMessage);
});

