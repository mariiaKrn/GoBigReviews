import { Locator, Page } from "@playwright/test";
import { Methods } from "./methods";

export class SignIn extends Methods {
    private signUpLink: Locator;

    constructor(page: Page) {
        super(page);
        this.signUpLink = page.locator('[href="/register"]');
    }

    async verifySignUpLink() {
        await this.verifyVisible(this.signUpLink);
        await this.verifyAttribute(this.signUpLink, 'class', 'link-primary fw-semibold');
        await this.verifyText(this.signUpLink, 'Sign up');
    }

    async clickOnSignUp() {
        await this.click(this.signUpLink);
    }
}