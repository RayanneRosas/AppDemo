const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path=require('path')
const fs=require('fs-extra')

function getConfigurationByFile (file) {
  // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
  const pathToConfigFile = path.resolve('environment', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      const file = config.env.configFile || 'hom'
       return getConfigurationByFile(file)

    },
  },
});
