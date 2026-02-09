import {Locator, Page} from '@playwright/test';
import BasePage from "./base-page";
import textContent from '../data/textContent.json'

export default class ThankYouPage extends BasePage{
    readonly title: Locator;

    constructor(page: Page) {
        super(page);
        this.title = this.page.getByRole('heading', { name: textContent.pages.thankYouPage.title });
    }

}