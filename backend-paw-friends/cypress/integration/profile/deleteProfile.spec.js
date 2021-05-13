describe('Cypress de deleção dos profiles', () => {
    it('Deletando um profile', () =>
    {
        cy.visit('http://localhost:3000/')
        cy.wait(400)

        // Login
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(1) > input').click().should('be.visible').type('FluLider')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(2) > input').click().should('be.visible').type('123')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > button').contains('Entrar').click()
        cy.wait(2000)

        cy.get('#navbarTogglerDemo02 > ul > a:nth-child(2)').click()
        cy.wait(400)
        cy.get('[name=deletebutton]').click();
        cy.wait(400)


    })
})