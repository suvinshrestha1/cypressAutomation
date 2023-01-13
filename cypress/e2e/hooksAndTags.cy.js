describe('Hooks and Tags',()=>{
    before(()=>{
        cy.log("**** open application ****")
    })
    
    after (()=>{
        cy.log("**** application close")
    })
    
    beforeEach(()=>{
        cy.log("***** login ***** ")
    })

    
    afterEach(()=>{
        cy.log("***** logout ***** ")
    })
    
    it('search',()=>{
        cy.log('***** searching *****')
    })

    it('advanced search',()=>{
        cy.log('***** advance searching *****')
    })

    it('listing products',()=>{
        cy.log(' **** product listing *****')
    })

})