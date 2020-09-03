/// <reference types="Cypress" />

context("Selected item in Nav", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(5000);
  });

  it("cy.get() - query DOM elements", () => {
    cy.get('[data-test-id="Sm9obiBTbWl0aA=="]').click();
    cy.wait(1000);
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).to.equal(5);
    });
    cy.get('[data-test-id="detailsButton2"]').click();
    cy.wait(2000);
    cy.get('[data-test-id="backButton"]').click();
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).to.equal(5);
    });
  });
});
