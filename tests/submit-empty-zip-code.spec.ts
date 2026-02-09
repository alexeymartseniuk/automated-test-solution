import { test, expect } from '../fixtures';
import textContent from '../data/textContent.json'

test('Submitting with an empty ZIP code shows a validation error', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    await test.step('Step 1: Enter valid ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode('');
    });
    await test.step('Step 2: Validate error message appears', async()  => {
        await expect(costToInstallForm.rootElement.getByText(textContent.pages.mainPage.costToInstallComponent.wrongZip)).toBeVisible();
    });
});



