describe("Header", () => {
  it("swap themes", () => {
    cy.intercept('GET', '1963098858.json').as('getJSON')
    cy.visit("")
    cy.url().then((url) => {
      cy.log('Current URL is: ' + url)
    })
    cy.wait('@getJSON').wait(300)
    cy.get('[aria-label="Switch theme color"]').trigger('click')
    cy.get('body').should('have.class', 'light')
    });
  });
