import test, { Page } from "@playwright/test";
import UIActions from "@uiActions/UIActions";
import Assert from "@asserts/Assert";
import CommonConstants from "@uiConstants/CommonConstants";
import HomePageConstants from "@uiConstants/HomePageConstants";
import HomePage from "@pages/HomePage";

export default class HomeSteps {    
    private ui: UIActions;

    constructor(private page: Page) {
        this.ui = new UIActions(page);
    }
    /**
     * Launch the Application
     */
    public async launchApplication() {
        await test.step(`Launching the application`, async () => {
            await this.ui.goto(process.env.BASE_URL, HomePageConstants.HOME_PAGE);
        });
    }
    /**
     * Log into the application
     * @param userName 
     * @param password 
     */
    public async login(userName: string, password: string) {
        await test.step(`Login to application credentials as ${userName} & ${password}`, async () => {
            // await this.ui.element(HomePage.USER_ICON, HomePageConstants.USER_ICON).click();
            await this.enterLoginDetails(userName, password);
        });        
    }
    /**
     * Enter login details
     * @param userName 
     * @param password 
     */
    public async enterLoginDetails(userName: string, password: string) {
        await test.step(`Enter login credentials as ${userName} & ${password}`, async () => {
            await this.ui.editBox(HomePage.USER_NAME_TEXTBOX, HomePageConstants.USER_NAME).fill(userName);
            await this.ui.editBox(HomePage.PASSWORD_TEXTBOX, HomePageConstants.PASSWORD).fill(password);
            // await this.ui.checkbox(HomePage.REMEMBER_ME_CHECKBOX, HomePageConstants.REMEMBER_ME_CHECKBOX).check();
            await this.ui.element(HomePage.SIGN_IN_BUTTON, HomePageConstants.SIGN_IN_BUTTON).click();
        });
    }
    /**
     * Validate logged in user
     * @param userName 
     */
    public async validateLogin(userName: string) {
        await test.step(`Verify that user is successfully logged in as ${userName}`, async () => {
            const user = await this.ui.element(HomePage.LOGGED_IN_USER, HomePageConstants.USER_NAME).getTextContent();
            await Assert.assertContainsIgnoreCase(user, userName, HomePageConstants.USER_NAME);
        });        
    }
    /**
     * Validate invalid login
     * @param errorMessage 
     */
    public async validateInvalidLogin(errorMessage: string) {
        await test.step(`Verify that error message ${errorMessage}`, async () => {
            const user = await this.ui.element(HomePage.SIGN_IN_ERROR_MESSAGE, HomePageConstants.SIGN_IN_ERROR_MESSAGE)
                .getTextContent();
            await Assert.assertEquals(user, errorMessage, HomePageConstants.SIGN_IN_ERROR_MESSAGE);
        });
    }
    /**
     * Log out of the application
     */
    public async logout() {
        await test.step(`Logged out of application`, async () => {
            await this.ui.element(HomePage.LOGGED_IN_USER, HomePageConstants.USER_NAME).click();
            await this.ui.element(HomePage.SIGN_OUT_LINK, HomePageConstants.SIGN_OUT_LINK).click();
            await this.ui.pauseInSecs(CommonConstants.TWO);
        });
    }
}
