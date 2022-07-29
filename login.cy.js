/// <reference types="cypress" />





context ('Novo Usuario',()=>{
    it ('Cadastro de novo usuario',()=>{


     cy.visit('http://automationpractice.com/index.php? ') 
     cy.get('[class="login"]').click()   
     cy.get('#email_create').type('javaconsult@gmail.com')
     cy.get('#SubmitCreate').click()
    });

    it('Completar cadastro',()=>{
        cy.get('#customer_firstname').type('Maria Joaquina')
        cy.get('#customer_lastname').type('Silva de Souza')
        cy.get('[name="passwd"]').type('#paulinha')
      cy.get('select#days').select('4')
      cy.get('select#months').select('April')
      cy.get('select#years').select('1987')
      cy.get('[name="address1"]').type('Av das Flores , 1021')
      cy.get('#city').type('Nova Esperança')
      cy.get('select#id_state').select('California')
      cy.get('[name="postcode"]').type('90002')
      cy.get('#phone_mobile').type('2347882')
      cy.get('[name="alias"]').clear().type('Onde pode me encontrar')
      cy.get('[name="submitAccount"]').click()
      


    });
});
