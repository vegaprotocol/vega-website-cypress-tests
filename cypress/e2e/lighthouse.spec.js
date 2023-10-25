const headers = require("../fixtures/headers"); 
import { pages } from "../support/pages"

pages.forEach((page) => {
  describe('Page content tests', () => {
    context(page.path, () => {
      before(() => {
        cy.visit(page.path, { headers })  
      });
  
      it(`The page meets lighthouse baseline`, () => {
        cy.lighthouse(page.lighthouse)
      });
    });
   });
 });