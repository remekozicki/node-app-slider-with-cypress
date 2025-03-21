describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks swiping back and fore ', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Italy');

  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if each slide displays the correct title and description', function () {
    cy.visit('http://localhost:3000');

    const expectedSlides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];

    cy.get('.swiper').should('be.visible');

    expectedSlides.forEach((slide, index) => {

      cy.get('.swiper-slide-active').click()
      cy.wait(2000)
      cy.get('h1').should('contain', slide.title);
      cy.get('p').should('contain', slide.description);

      if (index < expectedSlides.length - 1) {
        cy.get('.swiper-button-next').click();
      }
    });
  });
});

describe('Swiper Gallery Responsive Test', function () {
  const viewports = [
    { device: 'Desktop', width: 1980, height: 1080},
    { device: 'Tablet', width: 768, height: 1024},
    { device: 'Mobile phone', width: 375, height: 667}
  ];

  viewports.forEach(({device, width, height}) => {
    it (`Check layout for ${device}`, function (){
      cy.viewport(width, height);
      cy.visit('http://localhost:3000');

      cy.get('.swiper').should('be.visible');

      cy.get('.swiper-slide-active').within(() => {
        cy.get('h1').should('be.visible');
        cy.get('p').should('be.visible');
      });
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-button-prev').should('be.visible').click();

    });
  });

});

describe ('Check if gallery is displayed properly test', function (){
  it ('Check if gallery is visible', function (){
    cy.visit('http://localhost:3000');

    cy.get('.swiper').should('be.visible');

    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.card-contents').each((slide) => {
      cy.wrap(slide).should('be.visible');
    });
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
  })
});