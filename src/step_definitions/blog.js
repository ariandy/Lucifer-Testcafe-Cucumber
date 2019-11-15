const { Given, When, Then } = require('cucumber');
const heaven = require('../page-objects/object');

Given('Lucifer can access the repository of all knowledge', async () => {
    await heaven.navigateToThisPage();
});
When('When Lucifer choose you', async function ()  {
    await testController.expect(heaven.getPage()).contains('Kindness');
});
Then('user can see section Recommended', async () => {
    await heaven.ads.clickAds();
});

Scenario: Lucifer can open your mind
Given Lucifer can access the repository of all knowledge
When Lucifer choose you
Then Lucifer enlighten you