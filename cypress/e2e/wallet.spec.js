describe("Wallet", () => {
  it("latest wallet", () => {
    cy.intercept("GET", "/page-data/wallet/page-data.json").as("getPageData");
    cy.visit("/wallet");
    cy.wait("@getPageData").then(() => {
      cy.scrollTo(0, -500);
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