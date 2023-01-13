//import * as customCommands from "../fixtures/customCommands.json"


describe('custom commands',()=>{
    it('handling links',()=>{
        
        cy.visit('https://demo.nopcommerce.com/')
        
        // using custom commands
        cy.clickLink('Apple MacBook Pro 13-inch')
          .should('have.text','Apple MacBook Pro 13-inch')
        
    })
    
    it('login commands',()=>{
        cy.visit('https://demo.nopcommerce.com/')

    cy.clickLink('Log in')
    cy.loginapp()
    })
})