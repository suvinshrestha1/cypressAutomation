
///<reference types ="@4tw/cypress-drag-drop"/> 
import * as  mouseActionPageObject from "../support/mouseActionPageObjects.js"

describe('Mouse Action',()=>{
    it.only('mouse hover', ()=>{
        cy.visit('https://demo.opencart.com/')
        mouseActionPageObject.mouseoverAction() //mixed with pageObjectModel part
    })
    
    it('right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
       
         //approach 1
        // cy.get('.btn-neutral').trigger('contextmenu')
        // cy.get('.context-menu-icon-edit > span').click()
        
        //approach 2
        mouseActionPageObject.rightClickAction() //mixed with pageObjectModel part

    })

    it.skip('double click',()=>{
     //couldn't find double click action website  

    })

    it('drag and drop',()=>{
       cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box1').drag('#box101');
    })
    it.only('Scroll action',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        mouseActionPageObject.dragndrop()   //mixed with pageObjectModel part
    })
})