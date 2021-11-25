/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('VEGA.XYZ homepage', () => {
    beforeEach(() => {
    })
  
    it('can check to homepage title', () => {
        cy.visit('/')
    })
    it('site footer credits are displayed correctly ',()=>{
        cy.get('.site-footer-credits').should('include.text','Gobalsky Labs Limited. Suite 23 Portland House, Glacis Road, Gibraltar, GX11 1AA')
    })

    it(' I can navigate to ABOUT page from homepage',()=>{
        cy.get('#site-navigation > ul > li').contains('About').click()
        cy.url().should('equal',`${Cypress.config().baseUrl}/about/`)
        cy.get('#what-is-vega').should('have.text','What is Vega?')
        cy.get('#content').should('not.be.empty')
    })

    it(' I can navigate to BACKGROUND page from homepage',()=>{
        cy.get('#site-navigation > ul > li').contains('Background').click()
        cy.url().should('equal',`${Cypress.config().baseUrl}/background/`)
        cy.get('#published-papers').should('have.text','Published papers')
        cy.get('#content').should('not.be.empty')
    })

    it(' I can navigate to USE page from homepage',()=>{
        cy.get('#site-navigation > ul > li').contains('Use').click()
        cy.url().should('equal',`${Cypress.config().baseUrl}/use/`)
        cy.get('#what-can-i-do-with-vega-today').should('have.text','What can I do with Vega today?')
        cy.get('#content').should('not.be.empty')
    })

    it(' I can navigate to WHO page from homepage',()=>{
        cy.get('#site-navigation > ul > li').contains('Who').click()
        cy.url().should('equal',`${Cypress.config().baseUrl}/who/`)
        cy.get('#team').should('have.text','Team')
        cy.get('#content').should('not.be.empty')
    })
  })
  