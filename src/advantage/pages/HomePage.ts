export default class HomePage {
    static readonly USER_ICON = "#GloPasswordSubmit";
    static readonly USER_NAME_TEXTBOX = "#GloATTUID";
    static readonly PASSWORD_TEXTBOX = "#GloPassword";
    static readonly REMEMBER_ME_CHECKBOX = "#GloRememberMe";
    static readonly SIGN_IN_BUTTON = "#GloPasswordSubmit";
    static readonly LOGGED_IN_USER = "//span[contains(@class, 'whitefont') and contains(., 'kj3679')]";
    static readonly SIGN_IN_ERROR_MESSAGE = "//*[@id='errorMessage']";
    static readonly SIGN_OUT_LINK = "#loginMiniTitle>[translate='Sign_out']";
    static readonly CREATE_NEW_ACCOUNT_LINK = "[translate='CREATE_NEW_ACCOUNT']";
    static readonly CATEGORY_DROPDOWN = "[name='categoryListboxContactUs']";
    static readonly PRODUCT_DROPDOWN = "[name='productListboxContactUs']";
    static readonly SUBJECT_TEXTAREA = "[name='subjectTextareaContactUs']";
    static readonly EMAIL_TEXTBOX = "[name='emailContactUs']";
    static readonly SEND_BUTTON = "#send_btn";
    static readonly CONTACT_US_MESSAGE = ".roboto-regular.successMessage";
    static readonly SEARCH_ICON = "#searchSection";
    static readonly SEARCH_TEXTBOX = "#autoComplete";
    static readonly SEARCH_CLOSE_IMAGE = "div.autoCompleteCover>div>img";
    static readonly HELP_ICON = "#menuHelp";
    static readonly MANAGEMENT_CONSOLE_LINK = "div#helpMiniTitle [translate='CONFIG_TOOL']";
}
