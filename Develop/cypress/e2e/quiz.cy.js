describe('Tech Quiz App', () => {
    it('loads the homepage and starts quiz', () => {
      cy.visit('/');
      cy.contains('Start Quiz').click();
      cy.get('[data-cy="question"]').should('be.visible');
    });
  });
  