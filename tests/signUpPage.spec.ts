import {test} from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SignIn } from "../pages/signIn";
import { Header } from "../pages/header";
import { SignUp } from "../pages/signUp"

test.describe('Check Sign In page', () => {
    let homePage: HomePage;
    let signIn: SignIn;
    let header: Header;
    let signUp: SignUp;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        signIn = new SignIn(page);
        header = new Header(page);
        signUp = new SignUp(page);

        await homePage.visitSite();
        await header.clickOnSignIn();
        await signIn.clickOnSignUp();
    })

    test('Check Sign Up with valid data', async () => {
        await signUp.verifyNameField();
        await signUp.fillNameField('Random Name');
        await signUp.verifyEmailField();
        await signUp.fillEmailField('random9@email.com');
        await signUp.verifyPasswordField();
        await signUp.fillPasswordField('QQQqqq!!!111');
        await signUp.verifyRepeatPasswordField();
        await signUp.fillRepeatPasswordField('QQQqqq!!!111');
        await signUp.verifyTermsConditionsCheckbox();
        await signUp.checkTermsConditionsCheckbox();
        await signUp.verifyNewsletterCheckbox();
        await signUp.checkNewsletterCheckbox();
        await signUp.verifySignUpButton();
        await signUp.clickOnSignUpButton();
        await homePage.verifyURL();
        await homePage.verifyTitles();
        await header.verifyAccountLink();
    })

    test('Check Sign Up with empty fields', async () => {
        await signUp.verifyThatSignUpButtonIsDisabled();
    })

    test('Check Sign Up with dupe email', async () => {
        await signUp.fillNameField('Random Name');
        await signUp.fillEmailField('random@email.com');
        await signUp.fillPasswordField('QQQqqq!!!111');
        await signUp.fillRepeatPasswordField('QQQqqq!!!111');
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyDupeEmail();
    })

    test('Check Sign Up with incorrect confirmation password', async () => {
        await signUp.fillNameField('Random Name');
        await signUp.fillEmailField('random7@email.com');
        await signUp.fillPasswordField('QQQqqq!!!111');
        await signUp.fillRepeatPasswordField('QQQqqq!!!222');
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyIncorrectOrEmptyRepeatPassword();
    })

    test('Check Sign Up with empty confirmation password', async () => {
        await signUp.fillNameField('Random Name');
        await signUp.fillEmailField('random7@email.com');
        await signUp.fillPasswordField('QQQqqq!!!111');
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyIncorrectOrEmptyRepeatPassword();
    })

})