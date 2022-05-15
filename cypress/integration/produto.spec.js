/// <reference types="cypress" />

context('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('Deve adicionar um produto ao carrinho ', () => {
        var quantidade = 1

        cy.get('.product-block')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain',    quantidade + '1 × “Ariel Roll Sleeve Sweatshirt” ')
    })

    it.only('Deve adicionar produto ao carrinho usando o comando customizado ', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'S', 'Red', 1)
    
    });

    it('Deve adicionar produto ao carrinho usando o comando customizado ', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Green', 1)


    });

    });
