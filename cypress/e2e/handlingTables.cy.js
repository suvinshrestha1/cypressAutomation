import * as handlingTables from "../fixtures/handlingTables.json";

describe('Handling Tables',()=>{
    beforeEach('login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type(handlingTables.username)
        cy.get('#input-password').type(handlingTables.password)
        cy.get('.btn.btn-primary').click()
        cy.get('.btn-close').click()

        cy.get('#menu-customer>a').click()
        cy.get('ul#collapse-5>li:first-child').click()

       



    })
     it('Check number of rows and columns',()=>{
       
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');
     })

     it('check cell data from specific row & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com')
     })
           
    it('Read all the rows and column data',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                 cy.log($col.text());
                })
            })
        })
    })
    it('Pagination',()=>{
        cy.get('.col-sm-6.text-end').then((e)=>{
            let myText=e.text();
            let  totalPages=myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1);
            cy.log("Total number of pages =====>" +totalPages);

            
            for(let p=1;p<=9;p++){
                if(totalPages>1){
                    console.log("Active page is "+p);
                    cy.get("ul.pagination>li:nth-child("+p+")").click();
                    cy.wait(1000);
                   
                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row,index,$rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td').each(($col,index,$cols)=>{
                             cy.log($col.text());
                            })
                        })
                    })

 
                
                
                
                
                
                }
                
            }

        }) 
    })
})