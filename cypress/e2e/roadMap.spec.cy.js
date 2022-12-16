describe("RoadmapCarousel", () => {
  it("can click previous", () => {
    cy.visit("");
    cy.get('.swiper-slide-prev > .h-full > .flex').scrollIntoView()
    .click();
    cy.get('.px-4 > [style="opacity: 1;"]').should('be.visible');
  });

  it("can click next", () => {
    cy.visit("");
    cy.get('.swiper-slide-next > .h-full > .flex').scrollIntoView()
    .click();
    cy.get('.px-4 > [style="opacity: 1;"]').should('be.visible');
  });

  it("view detailed roadmap", () => {
    cy.visit("");
    cy.get('.px-4 > [style="opacity: 1;"]').should('be.visible');
  });
});
