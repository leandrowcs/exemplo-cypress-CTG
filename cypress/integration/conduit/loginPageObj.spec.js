/// <reference types="cypress" />
import Login from '../../support/pageObjects/loginConduit'

describe('Login usando PageObjects', () => {
    const login = new Login()

    it('TC01 - Sign in', () => {
        login.page()
        login.email().type('leandrowcs@gmail.com')
        login.password().type('12345678')
        login.signInButton().should('be.visible').click()

        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })
})