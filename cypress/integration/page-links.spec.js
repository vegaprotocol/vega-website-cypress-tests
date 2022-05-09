import { pages } from "../support/pages"

pages.forEach((page) => { 
  describe(`${page.path} page links`, () => {
    before(() => {
      cy.visit(`${page.path}`)
    })
  
    it('check all links in main', () => {
      cy.get("body").within(() => {
          cy.get("a").each(page => {
            console.log(page)
              cy.request(page.prop('href'));
          })
      })
    });
  });
});