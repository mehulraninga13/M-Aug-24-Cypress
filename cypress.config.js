const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

  video: true, // Enable video recording
  
  
  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

       // Delete video for passed tests
       on('after:spec', (spec, results) => {
        if (results && results.video && results.stats.failures === 0) {
          // Remove video if the test passed
          fs.unlinkSync(results.video);
        }
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
