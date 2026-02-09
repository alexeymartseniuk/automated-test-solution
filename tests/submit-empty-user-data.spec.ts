import { test, expect } from '../fixtures';
import textContent from '../data/textContent.json'

test('Submitting with an empty user data shows a validation error', async ({ pageManager } ) => {
    const { basePage, costToInstallForm } = pageManager;

    const zipCode = '48001';
    const walkInTubeReasons = [
        'Independence',
        'Safety',
        'Therapy',
        'Other',
    ];
    const propertyOption = 'Owned House / Condo';

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
        await costToInstallForm.fillUserDetails('', '');
    });

    await test.step('Step 5: Validate error message appears', async()  => {
        const validationMessage = await costToInstallForm.emailInput.evaluate(
            (el: HTMLInputElement) => el.validationMessage
        );
        expect(validationMessage).toBe(textContent.pages.mainPage.costToInstallComponent.emptyUserData);
    });
});



