/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  it('My first test case', function () {
    cy.visit("https://licila.si");
    // Find the Znamke element by its selector
    cy.get("a[href='/znamke']").first()

    .trigger('mouseover')
    
    .get("a[href='/znamke']").last()
    
    .contains('Prikaži vse')
    
    .click({force: true})


  });

});
