class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-bodyy");
    this.productText = page.locator(".card-body b");
    this.cartLink = page.locator("[routerlink*='cart']");
  }

  async addProductToCart(productName) {
    const titles = await this.productText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      if (await this.products.nth(i).locator("b").textContent() === productName) {
        //add to cart
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  

  async gotoCart() {
    await this.cartLink.click();
  }
}

module.exports = { DashboardPage };
