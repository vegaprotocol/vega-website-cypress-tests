describe('Page content tests', () => {
  const testPage = (url, title, lighthouse, selector) => {
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
  
      it(`The page meets lighthouse baseline`, () => {
        cy.lighthouse(lighthouse);
      });
    });
  }


  testPage('/', 'Blockchain derivatives | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/key-concepts/', 'Key Vega Concepts | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, },
    '#gatsby-focus-wrapper div.overflow-x-hidden');
  testPage('/papers/', 'Papers & Research | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/talks/', 'Talks | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/use/', 'Use the network | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/develop/', 'Develop with Vega | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community', 'Community | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/careers', 'Careers at Vega | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community/contributors', 'Contributors | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/partners-backers/', 'Partners & Backers | Vega Protocol',
    { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
});

