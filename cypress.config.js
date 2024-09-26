const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
