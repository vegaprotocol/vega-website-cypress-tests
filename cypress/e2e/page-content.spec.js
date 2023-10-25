const headers = require("../fixtures/headers"); 
import { pages } from "../support/pages"

pages.forEach((page) => {
  describe('Page content tests', () => {
    context(page.path, () => {
      before(() => {
        cy.visit(page.path, { headers })  
      });
  
      it(`The page loads`, () => {
        cy.title().should('eql', page.title);
      });
  
      it('The page has the header, body and footer', () => {
        cy.get('header').should('be.visible');
        cy.get('div[data-cy="main"]').should('be.visible');
        cy.get('footer').should('be.visible');
      });
    });
  });
});
