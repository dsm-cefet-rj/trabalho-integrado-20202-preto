describe ('inital test', function () {
    it ('log in', function() {
        cy.visit('http://localhost:3000/')
        cy.contains('Adote Já!').click()
        cy.url()
            .should('include', '/login')
        cy.get('input')
            .type('brunoferrari')
        cy.get('.action-password')
            .type('password')
        cy.contains('Entrar').click()
    })
})