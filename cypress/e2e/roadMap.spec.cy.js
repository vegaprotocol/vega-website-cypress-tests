describe("RoadmapCarousel", () => {
  it("can click previous", () => {
    cy.visit("");
    //cy.get('[id="roadmap"]').first().scrollIntoView()
    cy.get('.swiper-slide-prev > .h-full > .flex').scrollIntoView()
    .click();
    });

    it("can click next", () => {
      cy.visit("");
      //cy.get('[id="roadmap"]').first().scrollIntoView()
      cy.get('.swiper-slide-next > .h-full > .flex').scrollIntoView()
      .click();
      });
    });
  
