


describe('xpath,CSS,Assertion',()=>{
    it('xpathlocatorsTest',()=>{
        cy.visit('https://demoqa.com/')
    
        cy.xpath('/html/body/div[2]/div/div/div[2]/div/div[6]').click().url().should('eq','https://demoqa.com/books')
        
        cy.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/span/div').click()
        cy.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/ul/li[1]').click().url().should('eq','https://demoqa.com/text-box')
           
       
    })
})