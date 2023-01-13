const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1i8bve',
  e2e: {
baseUrl:"https://demoqa.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
