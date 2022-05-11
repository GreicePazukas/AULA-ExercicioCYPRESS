/// <reference types="cypress" />


context('Funcionalidade Login', () => {

    beforeEach(() => {
       cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 
    })
        
   
    
it.only('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Olá, aluno_ebac')

});

it('Deve exibir uma mensagem de erro ao inserir o formato de email in ', () => {
    
});

});