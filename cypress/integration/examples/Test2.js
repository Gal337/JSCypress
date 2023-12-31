/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it('Opening webpage', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
  });

  it("Iterating through products and selecting specific product", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productsLocator");
    cy.get("@productsLocator").find(".product").each(($el, index, $list) => {

      const productName = $el.find("h4.product-name").text();
      if(productName.includes("Cashews"))
      {
        cy.wrap($el).find("button").click();
      }
      
    });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
