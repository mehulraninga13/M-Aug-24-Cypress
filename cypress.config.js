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
       on('after:spec', (spec, results) => {  if (results && results.video) 
        {    // Check if all tests eventually passed    
          const allEventuallyPassed = results.tests.every((test)=>test.attempts.some((attempt) => attempt.state === 'passed'))
              if (allEventuallyPassed) 
                { // Delete the video if all tests eventually passed
                        fs.unlink(results.video, (err) => 
                          {        
                            if (err) 
                              {         
                                 console.error('Failed to delete video:', err)        
                                } else 
                                {          
                                  console.log('Deleted video:', results.video)       
                                 }      
                                })    
                              }  
                            }
                          })
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
