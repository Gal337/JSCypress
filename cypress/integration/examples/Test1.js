/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  it('My first test case', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
  });

  it("Verifying 4 products are present", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should('have.length', 4);
    //Traversing from parent element to child element and chaining commands on child element
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    cy.get(".products").find(".product").each(($el, index, $list) => {
      const productName = $el.find("h4.product-name").text();
      if(productName.includes("Cashews"))
      {
        cy.wrap($el).find("button").click();
      }
    });
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });
    
  });
});
