const headers = require("../fixtures/headers"); 

describe("Header", () => {
  it("swap themes", () => {
    cy.intercept('GET', '/page-data/sq/d/*').as('getJSON')
    cy.setCookie('skip-geo-redirect', 'true')
    cy.visit("", { headers })  
    cy.wait('@getJSON').wait(300)
    cy.get('[aria-label="Switch theme color"]').trigger('click')
    cy.get('html').should('have.class', 'light')
    });
  });
