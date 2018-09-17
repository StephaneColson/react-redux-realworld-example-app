/// <reference types="Cypress" />

Cypress.Commands.add('login', (Email, Password) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/users/login',
    body: {
      user: {
        email: Email ? Email : 'joe@example.com',
        password: Password ? Password : 'joe123456',
      }
    }
  })
  .then((resp) => {
    window.localStorage.setItem('jwt', resp.body.user.token)
  })
})
