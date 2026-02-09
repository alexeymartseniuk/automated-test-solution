import { test, expect } from '../fixtures';
import textContent from '../data/textContent.json'
import data from '../data/userData.json'

test('Fill form with out-of-area zip code', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    const { outOfArea: outOfAreaCode } = data.userData.zipCodes;
    const { valid: email } = data.userData.email;
    const { outOfAreaMessage: finalMessage } = textContent.pages.mainPage.costToInstallComponent;

    await test.step('Step 1: Enter out of area ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode(outOfAreaCode);
    });

    await test.step('Step 2: Enter valid out of area email', async()  => {
        await costToInstallForm.fillOutOfAreaEmail(email)
    });

    await test.step('Step 3: Validate final out of area message', async()  => {
        await expect(costToInstallForm.rootElement.getByText(finalMessage)).toBeVisible();

    });
});



