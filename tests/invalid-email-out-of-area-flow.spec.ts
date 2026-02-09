import { test, expect } from '../fixtures';
import textContent from '../data/textContent.json'
import data from '../data/userData.json'

test('Validate error message appears if user enters invalid email for out of area flow', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    const { outOfArea: outOfAreaCode } = data.userData.zipCodes;
    const { invalid: invalidEmail } = data.userData.email;
    const { wrongEmail: invalidEmailMessage } = textContent.pages.mainPage.costToInstallComponent;

    await test.step('Step 1: Enter out of area ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode(outOfAreaCode);
    });

    await test.step('Step 2: Enter invalid out of area email', async()  => {
        await costToInstallForm.fillOutOfAreaEmail(invalidEmail)
    });

    await test.step('Step 3: Validate error message', async()  => {
        await expect(costToInstallForm.rootElement.getByText(invalidEmailMessage)).toBeVisible();
    });
});



