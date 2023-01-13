

describe("firstAssertionTest",()=>{

it ("implicit assertion",()=>{
cy.visit("https://accounts.google.com/login")
// cy.url().should('include','google.com')
// cy.url().should('contain','google')

//instead of repeating cy.url multiple time we can do like this
//  cy.url().should('include','google.com')
//           .should('contain','google')

//Again instead of writing should multiple time we can do this
cy.url().should('include','google.com')
.and('contain','google')
.and('not.contain',('yahoo'))
cy.get('.zOO9Bf').should('be.visible').and('exist')
cy.get('.cxMOTc > .rFrNMe')
cy.xpath("//a")
cy.get('#identifierId').type("suvinshr@gmail.com")
cy.get('#identifierNext').click()
    

//cy.title().should('contain',"Gmail").wait(20000) //showing some error for now

//cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()






})


})