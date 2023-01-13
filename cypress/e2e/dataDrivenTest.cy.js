describe('mytest',()=>{
    it.only('data driven demo',()=>{
        cy.fixture("fixturesAndtags2").then((data)=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//using data drive approach
        
            data.forEach((userdata)=>{
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
            cy.get('.oxd-button').click()
            
            if(userdata.username=='admin' && userdata.password=='admin123')
            {
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
            cy.get(".oxd-userdropdown-name").click()
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
            }
           
            else{
                cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
            }
                
            })
        })

       
    })
    
})