describe("Header", () => {
  it("swap themes", () => {
    cy.intercept('GET', '/page-data/wallet/page-data.json').as('getJSON')
    cy.visit("")
    cy.wait('@getJSON').wait(300)
    cy.get('[aria-label="Switch theme color"]').trigger('click')
    cy.get('body').should('have.class', 'light')
    });
  });
