import { test, expect } from '../fixtures';

test('Submit form “Cost to install form” by selecting all possible options in “Why are you interested in a walk-in tub?” step.', async ({ pageManager } ) => {
    const { basePage, costToInstallForm, thankYouPage } = pageManager;

    const zipCode = '48001';
    const walkInTubeReasons = [
        'Independence',
        'Safety',
        'Therapy',
        'Other',
    ];
    const propertyOption = 'Owned House / Condo';
    const userName = 'Test user';
    const userEmail = 'test@email.com';
    const phoneNumber = '(222)222-2222';

    await test.step('Step 1: Enter valid ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode(zipCode);
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

    await test.step('Step 5: Enter valid phone number', async()  => {
        await costToInstallForm.fillPhoneNumber(phoneNumber);
    });

    await test.step('Step 6: Validate pages "Thank you!" appears', async()  => {
        await expect(thankYouPage.title).toBeVisible();
    });
});



