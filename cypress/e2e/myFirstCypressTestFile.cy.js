

describe('my first test suite',()=>{
    it('test1',()=>{
        cy.visit('https://www.google.com/')
        cy.get('div>input.gLFyf').type('yo')
        cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click()
        cy.get('div.FPdoLc.lJ9FBc>center>input.gNO89b').click()
})
})