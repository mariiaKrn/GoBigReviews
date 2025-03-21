import { Locator, Page } from "@playwright/test";
import { Methods } from "./methods";

export class Header extends Methods {
    private signInLink: Locator;
    private accountLink: Locator;

    constructor(page: Page) {
        super(page);
        this.signInLink = page.locator('[href="/login"]');
        this.accountLink = page.locator('.btn-user');
    }

    async verifySignInLink() {
        await this.verifyVisible(this.signInLink);
        await this.verifyAttribute(this.signInLink, 'rel', 'canonical');
        await this.verifyText(this.signInLink, 'Sign In');
    }

    async clickOnSignIn() {
        await this.click(this.signInLink);
    }

    async verifyAccountLink() {
        await this.verifyVisible(this.accountLink);
        await this.verifyAttribute(this.accountLink, 'type', 'button');
    }

}