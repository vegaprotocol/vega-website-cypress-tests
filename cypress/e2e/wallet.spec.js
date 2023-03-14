describe("Wallet", () => {
  it("latest wallet", () => {
    cy.visit("/wallet")
    cy.get('[data-cy="Download desktop app (Mainnet)"]').scrollIntoView({ offset: { top: -500, left: 0 } }).click({ force: true }).wait(300)
    cy.get('[data-cy="downloadLink"]').each( (item) => {
      cy.wrap(item)
        .should('have.attr', "href").and('include', 'latest')
      }) 
  })
});
