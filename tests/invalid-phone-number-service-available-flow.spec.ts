import { test, expect } from '../fixtures';
import data from '../data/userData.json'

test('Validate error message appears if user enters invalid phone number for service available flow', async ({ pageManager } ) => {
    const { basePage, costToInstallForm, thankYouPage } = pageManager;

    const {
        zipCodes: { serviceAvailable: serviceAvailableCode },
        walkInTubeReasons,
        propertyOption,
        name: { valid: userName },
        email: { valid: userEmail },
        phoneNumber: { invalid: invalidPhone }
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

    await test.step('Step 4: Enter valid user name and email', async()  => {
        await costToInstallForm.fillUserDetails(userName, userEmail);
    });

    await test.step('Step 5: Enter invalid phone number', async()  => {
        await costToInstallForm.fillPhoneNumber(invalidPhone);
    });

    await test.step('Step 6: Validate error message appears', async()  => {
        await expect(thankYouPage.title).toBeVisible();
    });
});



