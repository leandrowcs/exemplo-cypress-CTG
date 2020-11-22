/// <reference types="cypress" />

describe('Login usando Cypress Command', () => {

    it('TC01 - Sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login')

        cy.SignInConduit(Cypress.env('user'), Cypress.env('password'))

        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })
})