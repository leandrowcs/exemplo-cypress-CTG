/// <reference types="cypress" />
import Login from '../../support/pageObjects/loginConduit'

describe('Login usando PageObjects', () => {
    const login = new Login()

    it('TC01 - Login - Sucesso', () => {
        login.page()
        login.email().type('leandrowcs@gmail.com')
        login.password().type('12345678')
        login.signInButton().should('be.visible').click()

        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('TC02 - Login - Falha', () => {
        login.page()
        login.email().type('leandrowcs@gmail.com')
        login.password().type('12345678')
        login.signInButton().should('be.visible').click()

        cy.get('.error-messages > li').should('contain','email or password is invalid')
    })
})