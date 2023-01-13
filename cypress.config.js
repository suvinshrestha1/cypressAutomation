const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 's4xunt',
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
