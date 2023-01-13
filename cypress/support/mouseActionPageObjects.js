export const mouseoverAction = () =>{
    
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible').click()
}

export const rightClickAction =()=>{
    cy.get('.btn-neutral').rightclick()
        cy.get('.context-menu-icon-edit > span').click()
}

export const dragndrop =() =>{cy.get(':nth-child(2) > tbody > :nth-child(23) > :nth-child(1) > img').scrollIntoView({duration:2000});
cy.get(':nth-child(2) > tbody > :nth-child(23) > :nth-child(1) > img').should('be.visible')

cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(1) > img').scrollIntoView();
cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(1) > img').should('be.visible')

    cy.get('#footer').should('be.visible')} 