const headers = require("../fixtures/headers"); 
import { pages } from "../support/pages"

pages.forEach((page) => {
  describe('Page content tests', () => {
    context(page.path, () => {
      before(() => {
        cy.setCookie('skip-geo-redirect', 'true')
        cy.visit(page.path, { headers })
      });
  
      it(`The page loads and has a header footer and body`, () => {
        cy.title().should('eql', page.title);
        cy.get('header').should('be.visible');
        cy.get('div[data-cy="main"]').should('be.visible');
        cy.get('footer').should('be.visible');
      });
    });
  });
});
