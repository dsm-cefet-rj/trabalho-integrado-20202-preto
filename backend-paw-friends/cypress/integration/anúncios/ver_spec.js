describe('Ver anúncios', () => {
    it('successfully loads', () => {
        cy.visit('/')
        // Login
        cy.get('#IndexPageComponent > div.row.mt-2 > div > a').contains('Adote Já!').click()
        cy.wait(200)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(1) > input').click().should('be.visible').type('lipe')
        cy.wait(200)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(2) > input').click().should('be.visible').type('123')
        cy.wait(200)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > button').contains('Entrar').click()
    })
})

