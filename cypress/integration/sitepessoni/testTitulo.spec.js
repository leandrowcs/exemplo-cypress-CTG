/// <reference types="cypress" />

describe('Elementos no site', () => {

    it('TC01 - Título', () => {
        cy.visit('https://viniciuspessoni.com/')
        
        cy.get('.et_pb_text_0 > .et_pb_text_inner > h1').should('have.text', 'tester brasil')

    })

})