const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  projectId: 'sc38ph',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://vega.xyz',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
