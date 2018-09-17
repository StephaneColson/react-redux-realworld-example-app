/// <reference types="Cypress" />

describe('Register', () => {
  beforeEach(() => {
    cy.visit('register')
  })

  it('Empty fields', () => {

  })

  it('Register existing email', () => {
    cy.get('[data-cy=Username]').type('Jane')
    cy.get('[data-cy=Email]').type('joe@example.com')
    cy.get('[data-cy=Password]').type('jane123456')
    cy.get('form').submit()
    cy.get('.error-messages')
      .should('contain', 'email is already taken.')
  })

  it('Register existing user', () => {
    cy.get('[data-cy=Username]').type('Joe')
    cy.get('[data-cy=Email]').type('jane@example.com')
    cy.get('[data-cy=Password]').type('jane123456')
    cy.get('form').submit()
    cy.get('.error-messages')
      .should('contain', 'username is already taken.')
  })

  it('Register New user', () => {
    // TODO: 
  })
})
