const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1i8bve',
  e2e: {
    baseUrl:"https://itera-qa.azurewebsites.net/home/automation",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
