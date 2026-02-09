
import { Page } from '@playwright/test';
import BasePage from './base-page';
import ThankYouPage from './thank-you-page';
import CostToInstallComponent from './page-components/cost-to-install-component';

export default class PageManager {
    readonly basePage: BasePage;
    readonly thankYouPage: ThankYouPage;
    readonly costToInstallForm: CostToInstallComponent;

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.thankYouPage = new ThankYouPage(page);
        this.costToInstallForm = new CostToInstallComponent(page);
    }
}
