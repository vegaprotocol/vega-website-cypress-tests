describe("BugBounties", () => {
  it("successful", () => {
    cy.intercept('http://localhost:8000/.netlify/functions/send-bug-reports', {
      statusCode: 200,
      body: {
        name: 'Success',
      },
    })
    cy.visit("http://localhost:8000/bug-bounties")
    cy.get('[data-cy="bugBountyForm"]')
      .should('be.visible')
      .type('test')
    cy.get('[data-cy="sendMsgBtn"]')
      .should('be.visible')
      .click({force: true})
    cy.get('[data-cy="submitDialog"]')
      .should('be.visible')
    cy.get('[data-cy="confirmSubmitDialog"]')
      .should('be.visible')
      .click()
      cy.get('[data-cy="confirmationMsg"]')
      .should('be.visible')    
    });
  });
