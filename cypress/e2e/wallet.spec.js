const headers = require("../fixtures/headers"); 
const mockReleases = require("../fixtures/github-releases.json");
describe("Wallet", () => {
  it("latest wallet", () => {
    cy.intercept("GET", "https://api.github.com/repos/vegaprotocol/vegawallet-desktop/releases", mockReleases).as("getPageData");
    cy.visit("/wallet", { headers })  
    cy.wait("@getPageData").then(() => {
      cy.get('[data-cy="DOWNLOAD THE VEGA DESKTOP WALLET"]').focus({ force: true, multiple: true });
      cy.get('[data-cy="downloadLink"]').each((item) => {
        cy.wrap(item).should("have.attr", "href").and("include", "latest");
      });
      cy.get('[data-cy="DOWNLOAD THE FAIRGROUND VEGA DESKTOP WALLET"]').focus({ force: true });
      cy.get('[data-cy="downloadLink"]').each((item) => {
        cy.wrap(item).should("have.attr", "href");
      });
    });
  });
});
8