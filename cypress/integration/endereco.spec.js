// <reference types="cypress" />

import EnderecoPage from'../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('my-account')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.EditarEnderecoFaturamento('Greice','Macedo','Google','Brasil','Av. da Espanha','30','São Paulo','São Paulo','03590-030','968231500','greice@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.EditarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

        
    });
});