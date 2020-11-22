/// <reference types="cypress" />

describe('Login usando Cypress Command', () => {

    it('TC01 - Login - Sucesso', () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type("leandrowcs@gmail.com")
            cy.get('input[type="password"]').type("12345678")
            cy.root().submit()
        })

        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('TC02 - Login - Falha', () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type("leandrowcs@gmail.com")
            cy.get('input[type="password"]').type("1234567")
            cy.root().submit()
        })

        cy.get('.error-messages > li').should('contain','email or password is invalid')
    })
})