import { Given, When, Then} from '@wdio/cucumber-framework';

import DashboardPage from '../pageobjects/dashboard.page.js';

const elements = {
    'user menu' : DashboardPage.menuUser
}

When(/^I click on the (\w+) "$/, async (element) => {
    await elements[element].click();
    browser.pause()
});

Then(/^I see should the username saying (.*)$/, async (name) => {
    await browser.saveScreenshot('./screenshot/screenshot3.png');
    await expect(DashboardPage.lblUserName).toBeExisting();
    await expect(DashboardPage.lblUserName).toHaveTextContaining(name);
});

