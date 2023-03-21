describe("Wallet", () => {
  it("latest wallet", () => {
    cy.intercept('GET', 'page-data.json').as('getJSON')
    cy.intercept('GET', 'app-data.json').as('getJSON')
    cy.visit("/wallet")
    cy.get('[data-cy="Download desktop app (Mainnet)"]').click({ force: true }).click({ force: true })
    cy.get('[data-cy="downloadLink"]').each( (item) => {
      cy.wrap(item)
        .should('have.attr', "href").and('include', 'latest')
      }) 
  })
});
