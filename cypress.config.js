const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
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
  
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 1,
    }
  
})
