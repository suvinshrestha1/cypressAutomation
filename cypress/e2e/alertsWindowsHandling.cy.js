describe('alertHandling',()=>{
    it('JS alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click();
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
            
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('confirmation alert using Ok button(automatic by Cypress)',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click();
        
        cy.on('window:confirm',(t)=>{ 
            expect(t).to.contains('I am a JS Confirm');
            
        })//cypress automatically closes the window with this event triggerer
        cy.get('#result').should('have.text','You clicked: Ok')
       
    })
    it('confirmation alert using Cancel button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click();
        
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
            
        })
        cy.on('window:confirm',()=>false); //cypress chooses the cancel button bypassing the automatic closure
        cy.get('#result').should('have.text','You clicked: Cancel')
       
    })
    it('PromptBox alert using Ok button',()=>{ //automatic by cypress
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
        
        cy.window().then((win)=>{
           cy.stub(win,'prompt').returns('welcome');
           
            
        })
        cy.get('button[onclick="jsPrompt()"]').click();
           // cy.on('window:confirm',()=>false); still need to find out how to give value and cancel
            cy.get('#result').should('have.text','You entered: welcome')
          
       
    })//method 1 passing the value with auth: funtion
    it('Authenticated alertPromptbox',()=>{ 
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: 
        {
            username:"admin",
            password:"admin"
        }
     });
        cy.get('.example').should('have.contain','Congratulations')
        
    })  
 //method 2 passing the authentication value directly in the link after https://  for eg:'https://admin:admin@ 
    it.only('Authenticated alertPromptbox',()=>{ 
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('.example').should('have.contain','Congratulations')
        
    })
  
        
     
          

})
