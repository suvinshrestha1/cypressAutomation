describe('mytest',()=>{
    it.only('fixture demo test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//using .fixture method
        cy.fixture('fixturesAndtags').then((data)=>{
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
            cy.get('.oxd-button').click()

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
        })

       
    })
    
})