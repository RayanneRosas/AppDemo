// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const faker = require('faker-br');

global.dados={
    origem: faker.address.city(),
    destino: faker.address.city(),
    dataIda: faker.date.future(),
    dataVolta: faker.date.future()
}

// Alternatively you can use CommonJS syntax:
// require('./commands')