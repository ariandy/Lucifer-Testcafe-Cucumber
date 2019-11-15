const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/heaven`;

exports.navigateToThisPage = async function () {
  return testController.navigateTo(url);
};

exports.getEarth = function () {
  return Selector('.milky-way.earth').with({ boundTestRun: testController }).textContent;
};

exports.clickTheOcean = function () {
    return testController.click(Selector('.ocean.pacific-ocean'));
};

exports.river = {
  clickAmazon: async function () {
      await testController
          .click(Selector('.america').withText('Amazon'));
  },
  clickMahakam: async function () {
      await testController
          .click(Selector('.borneo'));
  }
  
};

exports.peninsula = {
  clickOman: async function () {
      await testController
          .click(Selector('#asia > middleeast'));
  }
  
};