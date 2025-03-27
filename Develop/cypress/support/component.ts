import { mount } from 'cypress/react18';
import '../../src/index.css'; // optional global styles

// Extend Cypress interface to include 'mount' command
declare global {
  namespace Cypress {
	interface Chainable {
	  mount: typeof mount;
	}
  }
}

// Add custom Cypress command
Cypress.Commands.add('mount', mount);
