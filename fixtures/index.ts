import { test as base } from '@playwright/test';
import PageManager from '../pages/page-manager';

type TestFixtures = {
    pageManager: PageManager;
};

export const test = base.extend<TestFixtures>({
    pageManager: async ({ page }, use) => {
        await use(new PageManager(page));
    },
});

export { expect } from '@playwright/test';
