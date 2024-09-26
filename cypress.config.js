const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",  // Use the cypress-mochawesome-reporter directly
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,  // Ensure HTML report is generated
    json: true,
  },

  video: true,  // Enable video recording globally, but we will delete passed test videos

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Delete video for passed tests
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Check if all tests eventually passed
          const allEventuallyPassed = results.tests.every((test) =>
            test.attempts.some((attempt) => attempt.state === 'passed')
          );

          // If all tests passed, delete the video
          if (allEventuallyPassed) {
            fs.unlink(results.video, (err) => {
              if (err) {
                console.error('Failed to delete video:', err);
              } else {
                console.log('Deleted video:', results.video);
              }
            });
          }
        }
      });

      // Required for cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
