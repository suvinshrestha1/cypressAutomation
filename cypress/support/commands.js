// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types ="cypress"/>
///<reference types ="cypress-xpath"/> 
import * as customCommands from "../../cypress/fixtures/customCommands.json"

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap); 
    
})

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})

//this block overwrites the above command to ignore case-sensitivity of the linkText
Cypress.Commands.overwrite('contains',(originalFn,subject,filter,text,options = {}) =>{
    if (typeof text == 'object'){
        options = text
        text = filter
        filter =undefined
        }

        options.matchCase = false

        return originalFn(subject,filter,text,options)


})
Cypress.Commands.add("loginapp",(email,password) =>{
cy.get('.email').type(customCommands.email)
cy.get('.password').type(customCommands.password)
cy.get(".button-1.login-button").click()
cy.get('.cart-label').should('be.visible')


})

