/// <reference types="cypress" />

class login {
    page() {
        return cy.visit('https://react-redux.realworld.io/#/login')
    }
    email() {
        return cy.get('input[type="email"]')
    }
    password() {
        return cy.get('input[type="password"]')
    }
    signInButton() {
        return cy.get('.btn').contains('Sign in')
    }
}
export default login