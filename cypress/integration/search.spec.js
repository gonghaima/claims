/// <reference types="Cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(5000);
  });

  it("cy.get() - query DOM elements", () => {
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).to.equal(8);
    });
    cy.get('[data-test-id="textSearch"]').type("sk");
    cy.wait(1000);
    cy.get('[data-test-id="dataContent"]').should($p => {
      const length = $p.length;
      expect(length).equal(2);
    });
  });
});
