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
    cy.get(".product:visible").should('have.length',4);
  })
});
