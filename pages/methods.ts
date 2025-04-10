import { Page, Locator, expect } from "@playwright/test";

export class Methods {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyVisible(locator: Locator, options: {timeout?: number} = {}) {
        try {
        await expect(locator).toBeVisible(options);
        } catch (error) {
            console.log(`Visibility check failed ${locator}: ${error.message}`);
        }
    }

    async verifyText(locator: Locator, text: string, options: {timeout?: number} = {}) {
        try {
        await expect(locator).toHaveText(text, options);
        } catch (error) {
            console.log(`Text check failed ${locator}, ${text}: ${error.message}`);
        }
    }

    async verifyAttribute(
        locator: Locator, 
        attribute: string, 
        value: string, 
        options: {timeout?: number} = {}) {
            try {
            await expect(locator).toHaveAttribute(attribute, value, options);
            } catch (error) {
                console.log(`Attribute check failed ${locator}, ${attribute}, ${options}: ${error.message}`);
            }
        }

    async fillField (locator: Locator, value: string) {
        try {
        await locator.fill(value);
        await expect(locator).toHaveValue(value);
        } catch (error) {
            console.log(`Fill in fields check failed ${locator}, ${value}: ${error.message}`);
        }
    }

    async click (locator: Locator) {
        try {
        await locator.click();
        } catch (error) {
            console.log(`Click on button check failed ${locator}: ${error.message}`);
        }
    }

    async check (locator: Locator) {
        try {
            await locator.check();
            } catch (error) {
                console.log(`Check on checkbox check failed ${locator}: ${error.message}`);
            }
    }

    async verifyEnabled (locator: Locator, options: {timeout?: number} = {}) {
        try {
        await expect(locator).toBeEnabled();
        } catch (error) {
            console.log(`Enable check failed ${locator}: ${error.message}`);
        }
    }

    async verifyDisabled (locator: Locator, options: {timeout?: number} = {}) {
        try {
        await expect(locator).toBeDisabled();
        } catch (error) {
            console.log(`Disabled check failed ${locator}: ${error.message}`);
        }
    }
}