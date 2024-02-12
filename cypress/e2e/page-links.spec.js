const headers = require("../fixtures/headers"); 
import { pages } from "../support/pages"

pages.forEach((page) => { 
  describe(`${page.path} page links`, () => {
    before(() => {
      cy.setCookie('skip-geo-redirect', 'true')
      cy.visit(page.path, { headers })  
    })
  
    it('check all links in main', () => {
      cy.get("body").within(() => {
        cy.get("a").each(page => {
          if (page.prop('href') === 'https://www.tandfonline.com/doi/pdf/10.1080/1350486X.2022.2030773'){
            cy.log(`Skipping ${page.prop('href')}`);
          } else if (page.prop('href').indexOf('substack.com/') !== -1) {
            cy.log(`Skipping ${page.prop('href')}, substack does not like automated tests`);
          } else {
            cy.request(page.prop('href'));
          }
        })
      })
    });
  });
});
