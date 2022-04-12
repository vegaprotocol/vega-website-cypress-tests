describe('Page content tests', () => {
  const testPage = (url, lighthouse) => {
    context(url, () => {
      before(() => {
        cy.visit(url);
      });
  
      it(`The page meets lighthouse baseline`, () => {
        cy.lighthouse(lighthouse);
      });
    });
  }


  testPage('/', { performance: 60,accessibility: 100, "best-practices": 90, seo: 85, pwa: 100, });
  testPage('/key-concepts/', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/papers/', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/talks/', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/use/', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/develop/', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/careers', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community/contributors', { performance: 60, accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/partners-backers/', { performance: 60, accessibility: 100, "best-practices": 90, seo: 85, pwa: 65, });
});

