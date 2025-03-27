import { defineConfig } from 'cypress';
import { viteDevServer } from '@cypress/vite-dev-server';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    baseUrl: 'http://localhost:5173'
  },
});
