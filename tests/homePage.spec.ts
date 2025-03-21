import {test} from "@playwright/test";
import { HomePage } from "../pages/homePage";

test.describe('Check home page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visitSite();
    })

    test('Check title and URL', async () => {
        await homePage.verifyTitles();
        await homePage.verifyURL();
    })
})