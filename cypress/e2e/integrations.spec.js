const headers = require("../fixtures/headers"); 

describe("Component content checks", () => {
  it("has content in the /community/contributors page", () => {
    cy.visit("community/contributors", { headers })  
    cy.get('div[data-cy="contributors"] > div').should(
      "have.length.of.at.least",
      26
    );
  });
});
