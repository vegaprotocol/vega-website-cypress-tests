describe("Wallet", () => {
  it("latest wallet", () => {
    cy.intercept("GET", "/page-data/wallet/page-data.json").as("getPageData");
    cy.intercept('GET', '/page-data/index/page-data.json').as('getIndexData')
    cy.visit("/wallet");
    cy.wait("@getIndexData")
    cy.wait("@getPageData").then(() => {
      cy.get('[data-cy="Download Vega Wallet (Mainnet)"]').click({ force: true, multiple: true });
      cy.get('[data-cy="downloadLink"]').each((item) => {
        cy.wrap(item).should("have.attr", "href").and("include", "latest");
      });
      cy.get('[data-cy="Download Vega Wallet (Testnet)"]').click({ force: true });
      cy.get('[data-cy="downloadLink"]').each((item) => {
        cy.wrap(item).should("have.attr", "href");
      });
    });
  });
});
8