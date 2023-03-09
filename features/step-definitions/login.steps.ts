import { Given, When, Then } from '@wdio/cucumber-framework';

import DashboardPage from '../pageobjects/dashboard.page.js';

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}

// Login page

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a message saying (.*)$/, async (message, date) => {
    await browser.saveScreenshot('./screenshot/screenshot3.png');
    await expect(DashboardPage.lblPrefabSCGenerated).toBeExisting();
    await expect(DashboardPage.lblPrefabSCDate).toHaveTextContaining(date);
});

