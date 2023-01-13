import 'cypress-iframe'
describe('handling Iframe',()=>{
    it.skip('approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       let iframe= cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap); 
    iframe.clear().type("gotcha")
       

        
    })
    it('approach 2- Custom Command',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       
            cy.getIframe('#mce_0_ifr').clear().type("gotcha")
    
          
        
    })
    it.only('approach 3 Cypress Plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("gotcha");

      

      
    })

}) 