describe("Events", () => {
  it("There are events", () => {
    cy.visit("");
    cy.get('div[data-cy="events"]').should('be.visible');
    cy.get('div[data-cy="eventDetail"]').should('be.visible')
  });

  it("There are no events", () => {
    cy.visit("");
    cy.get('body').then((body) => {
      if (body.find('div[data-cy="thingsAreQuiet"]').length > 0) {
        throw new Error("No events currently in Notion")
      }
  });
  });
}); 
