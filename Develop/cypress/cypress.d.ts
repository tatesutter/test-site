/// <reference types="cypress" />
/// <reference types="cypress/react18" />

import { MountOptions, MountReturn } from 'cypress/react18'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
