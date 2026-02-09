# AUTOMATED TEST SOLUTION

A POC framework written in TS using Playwright to test landing page.

## Table of Contents

- [Prerequisites](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#prerequisites)
- [Setup Instructions](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#setup-instructions)
- [Running Tests](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#setup-instructions)
- [Test Reports](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#test-reports)
- [Project structure](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#project-structure)
- [Full list of scenarios to be automated](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#full-list-of-scenarios-to-be-automated)
- [Found bugs](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#found-bugs)
- [Top 5 priority scenarios](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#setup-instructions)
- [Ideas for improving the framework](https://github.com/alexeymartseniuk/automated-test-solution?tab=readme-ov-file#ideas-for-improving-the-framework) 

## Prerequisites
1. node.js (version 18 or later).
2. npm (version 9 or later).

## Setup Instructions
1. Clone the project repository:
2. Install project dependencies:

```shell
npm install
```

3. Install playwright dependencies:
 ```shell
npx playwright install
```

## Running Tests

To run all the E2E tests in the project, use the following command:

```shell
npx playwright test
```

For local debug mode:
```shell
npx playwright test --debug
```

For ui mode:
```shell
npx playwright test --ui 
```

## Test reports.
List reporter is default. Run the command below to see html report after tests execution:

```shell
npx playwright show-report
```
See more information about [Playwright reports](https://playwright.dev/docs/test-reporters#built-in-reporters)

## Project structure
`.github/workflowsl` - contains file in yml format with tests pipeline. Pipeline can be triggered manually via GitHub Actions. 

`data/textContent.json` - This file serves as a centralized content/copy repository for the application's UI text.

`fixtures/index.ts` - defines custom PW test fixtures, extending the base test object.

`pages` - provides page objects for page and shared components.

`playwright-report` - contains default html report.

`test-results` - contains tests execution results in json format. In case of failure, the trace file will be added.

`tests` - contains E2E tests for landing page.

## Full list of scenarios to be automated.
### 1. Functional testing - happy path

**1.1.** Submit form with all quiz options selected
Submit the "Cost to Install" form selecting **all** options in "Why are you interested in a walk-in tub?" and validate the "Thank you!" page appears.
- ZIP code: `48001`
- Why interested: `Independence`, `Safety`, `Therapy`, `Other`
- Property type: `Owned house`
- Name: `Test User`, Email: `test@email.com`
- Phone: `(222) 222-2222`

**1.2.** Submit form with a single quiz option
Same as 1.1 but selecting **only** "Independence". Validate the "Thank you!" page.

**1.3.** Submit ZIP code via Enter key
Enter a valid Michigan ZIP code (e.g. `48001`), press **Enter**, and validate the message "Why are you interested in a walk-in tub?" appears.

**1.4.** Paste ZIP code from clipboard
Paste a ZIP code from the clipboard into the input field and submit the form successfully.

**1.5.** Primary video autoplay
Validate the primary video element appears and **autoplays** when the landing page is opened.

**1.6.** Progress bar validation
Verify the progress bar in the "Cost to Install" form reflects the correct step numbers and labels.

**1.7.** Secondary video autoplay
Validate the secondary video element appears and **autoplays** when the landing page is opened.

**1.8.** Video pause on click
Validate **both** videos pause when the user clicks on them during playback.

**1.9.** Video resume on click
Validate **both** videos resume playback when clicked again after pausing.

**1.10.** Video audio behavior
> ⚠️ **Needs clarification** — Expected audio behavior is not yet defined.

**1.11.** "Available in Mazovia" badge
> ⚠️ **Needs clarification** — Expected badge behavior in the header is not yet defined.

### 2. Functional testing - negative flows
**2.1.** Click `Next` with an empty ZIP code field. Expected error: `Enter your ZIP code.`

**2.2.** Enter alphabetic characters only into ZIP code, click `Next`. Expected error: `Wrong ZIP code.`

**2.3.** Enter special characters only into ZIP code, click `Next`. Expected error: `Wrong ZIP code.`

**2.4.** Enter a ZIP code that does not belong to Michigan regions.
> ⚠️ Expected result needs clarification.

**2.5.** Enter an invalid ZIP code, click `Next`, verify error `Wrong ZIP code.` appears. Replace with a valid ZIP code — error `Wrong ZIP code.` should disappear.

**2.6.** Skip selection in `What type of property is this for?`, click `Next`. Expected error: `Choose one of the variants.`

**2.7.** Validate only 1 option can be selected in `What type of property is this for?`.

**2.8.** Leave `name` and `email` empty, click `Go To Estimate`. Validate error message appears.

**2.8b.** Fill `name` with special characters only. Expected error: `Your name should consist only of latin letters, apostrophes, underscores, dots and dashes.`

**2.9.** Fill `name` with first name only (e.g. `Test`). Expected error: `Your full name should contain both first and last name.`

**2.10.** Fill `name` with 2 characters only. Expected error: `This value is too short. Your name should have at least 3 characters or more.`

**2.11.** Leave phone number empty. Expected error: `Enter your phone number.`

**2.12.** Fill phone number with a few digits only (e.g. `234`). Expected error: `Wrong phone number.`

**2.13.** Deny geolocation permissions and verify `Available in Mazovia` badge behavior.
> ⚠️ Expected result needs clarification.

### 3. UI page structure and content

**3.1.** Validate headline `Here's Why So Many Seniors Have Added This Walk-In Bath In 2020…` renders correctly with `Walk-In Bath` in distinct red color.

**3.2.** Validate all page sections render in correct order according to design and PRD.

**3.3.** Validate all images load successfully across all sections.

**3.4.** Validate all interactive elements appear: videos, animations, `Show more`/`Show less` buttons.

**3.5.** Validate all animations play according to PRD.

**3.6.** Validate footer copyright text `© Caps Lock, 2026. All Rights Reserved` appears.

**3.7.** Validate `According to CDC research` disclaimer appears in footer.

**3.8.** Validate all interactive elements are reachable via keyboard only.

**3.9.** Validate text can be resized up (browser zoom) without loss of content.

**3.10.** Verify text localizations.
> ⚠️ Expected result needs clarification — e.g. what happens if user opens the page from another country?

## 4. Cross browser and responsive

**4.1.** Chrome desktop — latest version.

**4.2.** Safari desktop — latest version.

**4.3.** Firefox desktop — latest version.

**4.4.** Edge desktop — latest version.

**4.5.** Mobile viewport.

**4.6.** Tablet viewport.

**4.7.** No text overlapping when resizing browser window from desktop to mobile.

**4.8.** `Estimate your cost` button behavior across viewports.

**4.9.** Large desktop viewport (full monitor).

## Found bugs

1. `Estimate Your Cost` button inconsistency - present on mobile but absent on desktop.
2. Duplicated `How Much Does It Cost` sections.
3. Geolocation mismatch - header badge says `Mazovia`, form heading says `Michigan`.
4. Bath Walls color swatches show only two repeating colors.
5. Typo: `Our Price Promice` -> should be `Our Price Promise`.
6. Progress bar step numbering - `What type of property is this for?` shows step `2`, expected `3`.

## Top 5 priority scenarios

> The core purpose of this landing page is the `Cost to Install` form.
> A broken form means zero conversions and zero revenue.
> That's why the top 5 focus on form functionality.

1. Submit form with all quiz options selected.
2. Submit form with a single quiz option.
3. Verify progress bar in the form.
4. Empty ZIP code shows error `Enter your ZIP code.`
5. Empty name/email shows validation error.

## Ideas for improving the framework
- **ESLint** - unify coding standards and catch errors early.
- **Prettier** - auto format code for consistent style.
- **Husky and lint-staged** - run linters on precommit.
- `.env` to support for env variable management.