/// <reference types="cypress" />

describe('Login usando Cypress Command', () => {

    it('TC01 - Login - Sucesso', () => {
        cy.visit('https://react-redux.realworld.io/#/login')

        cy.SignInConduit(Cypress.env('user'), Cypress.env('password'))

        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('TC02 - Login - Falha', () => {
        cy.visit('https://react-redux.realworld.io/#/login')

        cy.SignInConduit(Cypress.env('user'), Cypress.env('password'))

        cy.get('.error-messages > li').should('contain','email or password is invalid')
    })
})