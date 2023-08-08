describe("Header", () => {
  it("swap themes", () => {
    cy.intercept('GET', '/page-data/sq/d/*').as('getJSON')
    cy.visit("")
    cy.wait('@getJSON').wait(300)
    cy.get('[aria-label="Switch theme color"]').trigger('click')
    cy.get('body').should('have.class', 'light')
  });

  it("swap language", () => {
      cy.server()
      cy.route('GET', '1963098858.json').as('getJSON')
      cy.visit("")
      cy.wait('@getJSON').wait(300)
      cy.get('.relative.ml-1 > .uppercase').trigger('click')
      cy.get('.flex-col > :nth-child(2) > .text-left').trigger('click')
      cy.get('.bg-vega-purple').should('be.visible');
      cy.get('[aria-current="page"').should('have.attr', 'hreflang').and('include', 'es')
  });

  it("go home", () => {
    cy.server()
    cy.route('GET', '1963098858.json').as('getJSON')
    cy.visit("/develop/")
    cy.get('#header > div > div > a').click()
    cy.wait('@getJSON').wait(300)
    cy.url().should('eq', 'https://vega.xyz/')
  });
});