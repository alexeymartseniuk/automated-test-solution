import { Page } from '@playwright/test';

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(path: string = '/'): Promise<void> {
        await this.page.goto(path);
        await this.page.waitForLoadState();
    }
}