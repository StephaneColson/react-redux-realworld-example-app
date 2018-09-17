/// <reference types="Cypress" />

describe('Settings', () => {
  var defaultPassword = 'joe123456'
  var changedPassword = 'changedPassword'
  beforeEach(() => {
    cy.login('joe@example.com',defaultPassword)
    // TODO: clean reset of Joe's Settings
    // Here using the UI to reset Profile picture url and Bio and submit
    cy.visit('/settings')
    cy.get('[data-cy=UrlProfile]').clear()
    cy.get('[data-cy=Bio]').clear()
    cy.get('form').submit()
    cy.visit('/settings')
  })

  it('Greets with Your Settings', () => {
    cy.contains('h1','Your Settings')
  })

  // TODO Change password
  // it('Change Password', () => {
    // cy.get('[data-cy=Password]').type('changedPassword')
    // cy.get('form').submit()
    // cy.visit('/settings')
    // // Check that we can authenticate with the changed password
    // cy.login('joe@example.com','joe123456') // Must fail
    // cy.login('joe@example.com',changedPassword)
    // // We must reinit with the defaultPassword
    // cy.get('[data-cy=Password]').type('defaultPassword')
    // cy.get('form').submit()
    // cy.login('joe@example.com','joe@example.com',) // Must succeed
    // //cy.get('form').submit()
  // })

  it('Adds a Profile picture', () => {
    var urlPicture = 'http://randomuser.me/api/portraits/lego/6.jpg'

    cy.get('[data-cy=UrlProfile]').type(urlPicture)
    cy.get('form').submit()
    cy.visit('/settings')
    cy.get('[data-cy=UrlProfile]').should('have.attr', 'value', urlPicture)
  })

  it('Adds a Bio', () => {
    var bio = 'My name is Joe!\nI\'m a Software Tester'

    cy.get('[data-cy=Bio]').type(bio)
    cy.get('form').submit()
    cy.visit('/settings')
    cy.get('[data-cy=Bio]').contains(bio)
  })

  it('Log Out', () => {
    cy.get('[data-cy=LogoutButton]').click()
    cy.get('.nav-link')
    .should('contain', 'Sign in')
//    .and('contain', ' Sign up')
  })



})
