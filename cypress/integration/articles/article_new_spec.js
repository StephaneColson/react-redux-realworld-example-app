/// <reference types="Cypress" />

describe('New Articles', () => {
  var title = 'My new article'
  var about = 'My new article is about stuff!'
  var content = 'Lorem Ipsum'

  beforeEach(() => {
    cy.login()
    cy.visit('/editor')
  })

  it('Write a new Article', () => {
    cy.get('[data-cy=ArticleTitle]').type(title)
    cy.get('[data-cy=ArticleAbout]').type(about)
    cy.get('[data-cy=ArticleContent]').type(content)
    cy.get('[data-cy=ArticleTags]').type('newTag')
    cy.get('form').submit()
    // TODO Assertion article published
  })

})
