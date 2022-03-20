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


  testPage('/', { accessibility: 100, "best-practices": 90, seo: 85, pwa: 100, });
  testPage('/key-concepts/', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/papers/', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/talks/', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/use/', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/develop/', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/careers', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/community/contributors', { accessibility: 95, "best-practices": 90, seo: 85, pwa: 65, });
  testPage('/partners-backers/', { accessibility: 100, "best-practices": 90, seo: 85, pwa: 65, });
});

