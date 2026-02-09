import { test, expect } from '../fixtures';

test.fixme(true, 'Bug -  Inconsistent progress bar steps on the form “Cost To Install”. Step name “What type of property is this for?” contains number 2 but it’s expected to be 3 ')
test('Validate progress bar in submission form', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    const zipCode = '48001';
    const walkInTubeReasons = [
        'Independence',
        'Safety',
        'Therapy',
        'Other',
    ];

    const propertyOption = 'Owned House / Condo';
    const userEmail = 'test@email.com';
    const userName = 'Test user';

    await test.step('Step 1: Enter valid ZIP code', async()  => {
        await basePage.goTo();
        await costToInstallForm.enterZipCode(zipCode);
    });

    await test.step('Step 2: Validate second step in progress bar', async()  => {
        await expect(costToInstallForm.rootElement.getByText('2 of 5')).toBeVisible();
        await costToInstallForm.selectWalkInTubReasons(walkInTubeReasons);
    });

    await test.step('Step 3: Validate third step in progress bar', async()  => {
        await expect(costToInstallForm.rootElement.getByText('3 of 5')).toBeVisible();
        await costToInstallForm.selectPropertyType(propertyOption);
    });

    await test.step('Step 4: Validate fourth step in progress bar', async()  => {
        await expect(costToInstallForm.rootElement.getByText('4 of 5')).toBeVisible();
        await costToInstallForm.fillUserDetails(userName, userEmail);
    });

    await test.step('Step 5: Validate fifth step in progress bar', async()  => {
        await expect(costToInstallForm.rootElement.getByText('5 of 5')).toBeVisible();
    });
});



