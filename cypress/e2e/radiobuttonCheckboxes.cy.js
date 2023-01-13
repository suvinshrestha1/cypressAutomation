describe("Check UI buttons",()=>{
it("Checking radio buttons",()=>{
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    cy.get('input#female').should('be.visible').check().should('be.checked')
    cy.get('input#male').should('be.visible').should('not.be.checked')
    cy.get('input#male').should('be.visible').check().should('be.checked')
    cy.get('input#female').should('be.visible').should('not.be.checked')
    cy.get('input#other').should('be.visible').should('not.be.checked')
    cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')//for both single and multiple checkboxes, cypress use the same get command.
    cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
    
})

})