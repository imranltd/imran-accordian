context('Querying', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3006/');
  });

  it('question should be visible answer not visible', () => {
    cy.wait(1000);

    cy.get('[data-test-id="accordion-0-question"]').should('be.visible');
    cy.get('[data-test-id="accordion-0-answer"]').should('not.be.visible');
  });

  it('click interactions expand and collapse', () => {
    cy.get('[data-test-id="accordion-0-question"]').click();
    cy.get('[data-test-id="accordion-0-answer"]').should('be.visible');

    cy.wait(1000);

    cy.get('[data-test-id="accordion-0-question"]').click();
    cy.get('[data-test-id="accordion-0-answer"]').should('not.be.visible');
  });
});
