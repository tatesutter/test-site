import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz title', () => {
    mount(<Quiz />);
    cy.contains('Tech Quiz').should('be.visible');
  });
});
