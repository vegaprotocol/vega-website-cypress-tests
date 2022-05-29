describe('Page content tests', () => {
  const testPage = (url, title) => {
    context(url, () => {
  
      before(() => {
        cy.visit(url);
      });
  
      it(`The page loads`, () => {
        cy.title().should('eql', title);
      });
  
      it('The page has the header, body and footer', () => {
        cy.get('header').should('be.visible');
        cy.get('div[data-cy="main"]').should('be.visible');
        cy.get('footer').should('be.visible');
      });
    });
  }


  testPage('/', 'Blockchain derivatives | Vega Protocol',);
  testPage('/key-concepts/', 'Key Vega Concepts | Vega Protocol');
  testPage('/papers/', 'Papers & Research | Vega Protocol',);
  testPage('/talks/', 'Talks | Vega Protocol',);
  testPage('/use/', 'Use the network | Vega Protocol',);
  testPage('/develop/', 'Develop with Vega | Vega Protocol',);
  testPage('/community', 'Community | Vega Protocol',);
  testPage('/careers', 'Careers at Vega | Vega Protocol',);
  testPage('/community/contributors', 'Contributors | Vega Protocol',);
  testPage('/partners-backers/', 'Partners & Backers | Vega Protocol',);
  testPage('/wallet/', 'Get the vega wallet | Vega Protocol',);
});

