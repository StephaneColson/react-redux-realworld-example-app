/// <reference types="Cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Greets with SignIn', () => {
    cy.contains('h1', 'Sign In')
  })

  it('Links to #/register', () => {
    cy
    .contains('Need an account?')
    .should('have.attr','href', '/register')
  })

  it('No email, no password', () => {
    cy.get('form').contains('Sign in').click()
    cy.get('.error-messages')
      .should('contain', 'email can\'t be blank')
  })

  it('No password', () => {
    cy.get('[data-cy=Email]').type('joe@example.com{enter}')
    cy.get('.error-messages')
      .should('contain', 'password can\'t be blank')
})

  it('Invalid email/password', () => {
    cy.get('[data-cy=Email]').type('joe@example.com{enter}')
    cy.get('[data-cy=Password]').type('1234{enter}')
    cy.get('.error-messages')
      .should('contain', 'email or password is invalid')
  })

  it('Login succeeds with valid email/password', () => {
    cy.get('[data-cy=Email]').type('joe@example.com{enter}')
    cy.get('[data-cy=Password]').type('joe123456')
    cy.get('form').contains('Sign in').click()
    //cy.hash().should('eq','#/')
    cy.get('.nav-link')
    .should('contain', 'joe')
  })

})
