import { expect, Locator, Page } from "@playwright/test";
import { Methods } from "./methods";

export class HomePage extends Methods {
    private titleBoostReviews: Locator;
    private titleBoostSales: Locator;
    private titleInstantly: Locator;

    constructor(page: Page) {
        super(page);
        this.titleBoostReviews = page.locator('.main-title', { hasText: 'Boost Reviews.' });
        this.titleBoostSales = page.locator('.main-title', { hasText: 'Boost Sales.' });
        this.titleInstantly = page.locator('.main-title', { hasText: 'Instantly!' });
    }

    async visitSite() {
        await this.page.goto('/');
    }

    async verifyTitles() {
        await this.verifyText(this.titleBoostReviews, 'Boost Reviews.');
        await this.verifyText(this.titleBoostSales, 'Boost Sales.');
        await this.verifyText(this.titleInstantly, 'Instantly!');
    }

    async verifyURL() {
        await expect(this.page).toHaveURL('https://gobigreviews.com/');
    }
}

    
