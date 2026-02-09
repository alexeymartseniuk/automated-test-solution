import { test, expect } from '../fixtures';
import textContent from '../data/textContent.json'
import data from '../data/userData.json'

test('Submitting with an empty user data shows a validation error', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    const {
        zipCodes: { serviceAvailable: serviceAvailableCode },
        walkInTubeReasons,
        propertyOption,
    } = data.userData;

    await test.step('Step 1: Enter service available ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode(serviceAvailableCode);
    });

    await test.step('Step 2: Select all options in "Why are you interested in a walk-in tub?" step', async()  => {
        await costToInstallForm.selectWalkInTubReasons(walkInTubeReasons);
    });

    await test.step('Step 3: Select option - Owned House / Condo in “What type of property is this for?” step', async()  => {
        await costToInstallForm.selectPropertyType(propertyOption);
    });

    await test.step('Step 4: Enter invalid user name and email', async()  => {
        await costToInstallForm.fillUserDetails('', '');
    });

    await test.step('Step 5: Validate error message appears', async()  => {
        const validationMessage = await costToInstallForm.emailInput.evaluate(
            (el: HTMLInputElement) => el.validationMessage
        );
        expect(validationMessage).toBe(textContent.pages.mainPage.costToInstallComponent.emptyUserData);
    });
});



