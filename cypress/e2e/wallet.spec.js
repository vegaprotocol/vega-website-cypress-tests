describe("Wallet", () => {
  it("latest wallet", () => {
    cy.intercept('GET', '/page-data/index/page-data.json').as('getPageData')
    cy.intercept('GET', 'app-data.json').as('getAppData')
    cy.visit("/wallet")
    cy.wait('@getPageData')
    cy.wait('@getAppData').then(()=>{
    cy.wait('@getPageData')
    cy.scrollTo(0, -500)
    cy.get('[data-cy="Download desktop app (Mainnet)"]').click({ force: true })
    cy.get('[data-cy="downloadLink"]').each( (item) => {
      cy.wrap(item)
        .should('have.attr', "href").and('include', 'latest')
      }) 
  })})
});
