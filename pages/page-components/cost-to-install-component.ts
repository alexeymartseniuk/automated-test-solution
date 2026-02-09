import { Page, Locator } from '@playwright/test';


export default class CostToInstallComponent {
    readonly page: Page;
    readonly rootElement: Locator;
    readonly zipCodeInput: Locator;
    readonly nextButton: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly goToEstimateButton: Locator;
    readonly submitRequestButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rootElement = page.locator('#form-container-1');
        this.zipCodeInput = this.rootElement.getByRole('textbox', { name: 'Enter ZIP Code' });
        this.nextButton = this.rootElement.getByRole('button', { name: 'Next' });
        this.nameInput = this.rootElement.getByRole('textbox', { name: 'Enter Your Name' });
        this.emailInput = this.rootElement.getByRole('textbox', { name: 'Enter Your Email' });
        this.phoneInput = this.rootElement.locator('input[name="phone"]');
        this.goToEstimateButton = this.rootElement.getByRole('button', { name: 'Go To Estimate' });
        this.submitRequestButton = this.rootElement.getByRole('button', { name: 'Submit Your Request' });
    }

    private getQuizCard(text: string): Locator {
        return this.rootElement.locator('.quizCard').getByText(text);
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.zipCodeInput.fill(zipCode);
        await this.nextButton.click();
    }

    async selectWalkInTubReasons(reasons: string | string[]): Promise<void> {
        const reasonsList = Array.isArray(reasons) ? reasons : [reasons];
        for (const reason of reasonsList) {
            await this.getQuizCard(reason).click();
        }
        await this.nextButton.click();
    }

    async selectPropertyType(propertyOption: string): Promise<void> {
        await this.getQuizCard(propertyOption).click();
        await this.nextButton.click();
    }

    async fillUserDetails(name: string, email: string): Promise<void> {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.goToEstimateButton.click();
    }

    async fillPhoneNumber(phoneNumber: string): Promise<void> {
        await this.phoneInput.fill(phoneNumber);
        await this.submitRequestButton.click();
    }
}