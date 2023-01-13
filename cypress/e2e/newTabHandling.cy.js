describe('newTab window',()=>{
    it('Approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        //invoke('removeAttr','target') will remove the target attribute
        cy.get('div.example>a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')//will go back to the previous page
    })
    it.only('Approach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        cy.get('div.example>a').then((e)=>{
        let url = e.prop('href')
        cy.visit(url)
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')//will go back to the previous page
        })
    })
})


