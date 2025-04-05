import {test} from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SignIn } from "../pages/signIn";
import { Header } from "../pages/header";
import { SignUp } from "../pages/signUp";
import userData from "../tests/data/userData.json";
//import { getRandomEmail, getRandomName } from "../tests/data/randomFunction";
import { getRandomEmail, getRandomName } from "../tests/data/faker";
//import {allure} from 'allure-playwright';
import { allureId } from 'allure-js-commons';

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
        allureId.label('feature', 'Sign Up');
        allureId.label('epic', 'Authentication');
        allureId.label('story', 'User registers with valid credentials');
        allureId.label('severity', 'critical');
        allureId.label('tag', 'regression');
        allureId.label('tag', 'smoke');
        allureId.owner('Maria');
        allureId.label('testId', 'TS001');
        allureId.issue('AUTH-123', 'Sign Up fails on special symbols');
        const name = getRandomName();
        const email = getRandomEmail();
        const user = userData.validUser;

        await allureId.step('Fill in valid registration form', async () => {
        await signUp.verifyNameField();
        await signUp.fillNameField(name);
        console.log(name);
        await signUp.verifyEmailField();
        await signUp.fillEmailField(email);
        console.log(email);
        await signUp.verifyPasswordField();
        await signUp.fillPasswordField(user.password);
        await signUp.verifyRepeatPasswordField();
        await signUp.fillRepeatPasswordField(user.password);
        await signUp.verifyTermsConditionsCheckbox();
        await signUp.checkTermsConditionsCheckbox();
        await signUp.verifyNewsletterCheckbox();
        await signUp.checkNewsletterCheckbox();
        await signUp.verifySignUpButton();
        await signUp.clickOnSignUpButton();
        });

        await allureId.step('Verify post registration behavior', async () => {
        await homePage.verifyURL();
        await homePage.verifyTitles();
        await header.verifyAccountLink();
        });
    })

    test('@regression Check Sign Up with empty fields', async () => {
        await signUp.verifyThatSignUpButtonIsDisabled();
    })

    test('@smoke Check Sign Up with dupe email', async () => {
        const dublicateUser = userData.dublicateUser;
        await signUp.fillNameField(dublicateUser.name);
        await signUp.fillEmailField(dublicateUser.email);
        await signUp.fillPasswordField(dublicateUser.password);
        await signUp.fillRepeatPasswordField(dublicateUser.password);
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyDupeEmail();
    })

    test('@regression Check Sign Up with incorrect confirmation password', async () => {
        const invalidRepeatPassword = userData.invalidUser;
        await signUp.fillNameField(invalidRepeatPassword.name);
        await signUp.fillEmailField(invalidRepeatPassword.email);
        await signUp.fillPasswordField(invalidRepeatPassword.password);
        await signUp.fillRepeatPasswordField(invalidRepeatPassword.repeatPassword);
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyIncorrectOrEmptyRepeatPassword();
    })

    test('@smoke Check Sign Up with empty confirmation password', async () => {
        const emptyRepeatPassword = userData.invalidUser;
        await signUp.fillNameField(emptyRepeatPassword.name);
        await signUp.fillEmailField(emptyRepeatPassword.email);
        await signUp.fillPasswordField(emptyRepeatPassword.password);
        await signUp.checkTermsConditionsCheckbox();
        await signUp.clickOnSignUpButton();
        await signUp.verifyIncorrectOrEmptyRepeatPassword();
    })

})