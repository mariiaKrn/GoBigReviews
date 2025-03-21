import { Locator, Page } from "@playwright/test";
import { Methods } from "./methods";

export class SignUp extends Methods {
    private nameField: Locator;
    private emailField: Locator;
    private passwordField: Locator;
    private repeatPasswordField: Locator;
    private termsConditionsCheckbox: Locator;
    private newsletterCheckbox: Locator;
    private signUpButton: Locator;
    private errorMessageForEmailDupe: Locator;
    private errorMessageForRepeatPassword: Locator;

    constructor(page: Page) {
        super(page);
        this.nameField = page.locator('[name="name"]');
        this.emailField = page.locator('[name="email"]');
        this.passwordField = page.locator('[name="password"]');
        this.repeatPasswordField = page.locator('[name="confirm-password"]');
        this.termsConditionsCheckbox = page.locator('[name="toc"]');
        this.newsletterCheckbox = page.locator('.form-check-input').nth(1);
        this.signUpButton = page.locator('[type="submit"]');
        this.errorMessageForEmailDupe = page.locator('.text-danger', { hasText: 'The email has already been taken.' });
        this.errorMessageForRepeatPassword = page.locator('.text-danger', { hasText: 'The password field confirmation does not match.' });
    }

    async verifyNameField() {
        await this.verifyVisible(this.nameField);
        await this.verifyAttribute(this.nameField, 'placeholder', 'Name');
        await this.verifyEnabled(this.nameField);
    }

    async fillNameField(value: string) {
        await this.fillField(this.nameField, value);
    }

    async verifyEmailField() {
        await this.verifyVisible(this.emailField);
        await this.verifyAttribute(this.emailField, 'placeholder', 'Email');
        await this.verifyEnabled(this.emailField);
    }

    async fillEmailField(value: string) {
        await this.fillField(this.emailField, value);
    }

    async verifyPasswordField() {
        await this.verifyVisible(this.passwordField);
        await this.verifyAttribute(this.passwordField, 'placeholder', 'Password');
        await this.verifyEnabled(this.passwordField);
    }

    async fillPasswordField(value: string) {
        await this.fillField(this.passwordField, value);
    }

    async verifyRepeatPasswordField() {
        await this.verifyVisible(this.repeatPasswordField);
        await this.verifyAttribute(this.repeatPasswordField, 'placeholder', 'Repeat Password');
        await this.verifyEnabled(this.repeatPasswordField);
    }

    async fillRepeatPasswordField(value: string) {
        await this.fillField(this.repeatPasswordField, value);
    }

    async verifyTermsConditionsCheckbox() {
        await this.verifyVisible(this.termsConditionsCheckbox);
        await this.verifyAttribute(this.termsConditionsCheckbox, 'type', 'checkbox');
    }

    async checkTermsConditionsCheckbox() {
        await this.check(this.termsConditionsCheckbox);
    }

    async verifyNewsletterCheckbox() {
        await this.verifyVisible(this.newsletterCheckbox);
        await this.verifyAttribute(this.newsletterCheckbox, 'type', 'checkbox');
    }

    async checkNewsletterCheckbox() {
        await this.check(this.newsletterCheckbox);
    }

    async verifySignUpButton() {
        await this.verifyVisible(this.signUpButton);
        await this.verifyAttribute(this.signUpButton, 'type', 'submit');
        //await this.verifyText(this.signUpButton, 'Sign up');
    }

    async clickOnSignUpButton() {
        await this.click(this.signUpButton);
    }

    async verifyThatSignUpButtonIsDisabled() {
        await this.verifyDisabled(this.signUpButton);
    }

    async verifyDupeEmail() {
        await this.verifyText(this.errorMessageForEmailDupe, 'The email has already been taken.');
    }

    async verifyIncorrectOrEmptyRepeatPassword() {
        await this.verifyText(this.errorMessageForRepeatPassword, 'The password field confirmation does not match.');
    }

}