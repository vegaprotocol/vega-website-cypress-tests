describe('Component content checks', () => {
  it('has content in the bounties section on the /develop/ page', () => {
    cy.visit('/develop/');
    cy.get('div[data-cy="incentive"]').each(($el, index, list) => {
      cy.wrap(list).should('have.length.of.at.least', 2);
      cy.wrap($el).invoke('text')
        .should('match', /^(Bounty|Incentive)[\s\S]+Reward:\d+(\sDAI|\sVEGA)?View$/)
    });
  });
  
  it('has content in the bounties section on the /community/ page', () => {
    cy.visit('/community/');
    cy.get('div[data-cy="incentive"]').each(($el, index, list) => {
      cy.wrap(list).should('have.length.of.at.least', 2);
      cy.wrap($el).invoke('text')
        .should('match', /^(Bounty|Incentive)[\s\S]+Reward:\d+(\sDAI|\sVEGA)?View$/)
    });
  });

  it('has content in the contributors section on the /community/ page', () => {
    cy.visit('/community/');
    cy.get('div[data-cy="contributors"] > div').should('have.lengthOf', 26);
  });

  it('has content in the contributors section on the /community/contributors page', () => {
    cy.visit('/community/contributors');
    cy.get('div[data-cy="contributors"] > div').should('have.length.of.at.least', 26);
  });
});
