

describe('dropdownFunction',()=>{
    it.skip('dropdown with select',()=>{//when we use .skip, this block of it won't be run(used instead of grey out)
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select("American Samoa").should('have.value','American Samoa')//assertion using have.value
    })
    it.skip('dropdown without select',()=>{//bootstrap dropdown
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Ukraine').type('{enter}') // .type('{enter}') will press enter
        cy.get('#select2-billing_country-container').should('have.text','Ukraine') //have.text to assert the text in the input box since this is not regular dropdown


    })
    it.skip('Auto select static dropbox',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput[name='search']").type('calif')
        cy.get('.suggestion-text').contains('California').click()
    })
    it('auto select dynamic dropbox',()=>{
        cy.visit('https://www.google.com/')
        cy.get('input.gLFyf').type('ant')
        cy.get('div.wM6W7d>span').should('have.length',11)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            if($el.text()=='Antonio Brown')
            {
                cy.wrap($el).click()
            }
           
        })
        cy.wait(5000)
        cy.get('input.gLFyf').should('have.value','antonio brown') 


    })
    
})