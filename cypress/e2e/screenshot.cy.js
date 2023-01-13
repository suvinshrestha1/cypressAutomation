describe('my suite',()=>{
    it('screenshots manually', ()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot('homepage')
        cy.get('header>div>div>div>div>a>img:nth-child(1)').screenshot('logo')
    })
//automatically captures screenshots on failure when we execute thru CLI(command line interface)
//this means it will not show in the browser, only in the TERMINAL
    it('screenshots automatically', ()=>{
        cy.visit('https://demo.opencart.com/');
        
        cy.get('header>div>div>div>div>a>img:nth-child(1)').should('have.text','whatever')
    })
})