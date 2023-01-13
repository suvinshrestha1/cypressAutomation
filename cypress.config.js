const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 's4xunt',
  screenshotOnRunFailure:true,
  video:false,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
