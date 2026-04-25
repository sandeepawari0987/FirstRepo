const { test, expect } = require('@playwright/test');
const { POManager } = require('../page/POManager');

const dataset = JSON.parse(JSON.stringify(require('../testData/testDatafile.json')));

for (const data of dataset)
{
test(`Client App login for ${data.productName} and add product to cart`, async ({ page }) => 
  {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const dashboardPage = poManager.getDashboardPage();
  await loginPage.goto();
  await loginPage.login(data.email, data.password);
  await dashboardPage.addProductToCart(data.productName);
  await dashboardPage.gotoCart();
  
  });
}


