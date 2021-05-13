describe('Cypress de edição dos profiles', () => {
    it('Editando os profiles', () =>
    {
        cy.visit('http://localhost:3000/')
        cy.get('#IndexPageComponent > div.row.mt-2 > div > a').contains('Adote Já!').click()
        cy.wait(400)

        // Login
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(1) > input').click().should('be.visible').type('FluLider')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(2) > input').click().should('be.visible').type('123')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > button').contains('Entrar').click()
        cy.wait(2000)

        // Editando conta
        cy.get('#navbarTogglerDemo02 > ul > a:nth-child(2)').click()
        cy.wait(400)
        cy.get('[name=ActionButton]').click();
        cy.wait(400)
        cy.get('[name=img]').clear().type('https://www.tupi.fm/wp-content/uploads/51175344166_747830582c_c.jpg');
        cy.wait(400)
        cy.get('[type=submit]').click();
        cy.wait(2000)

    })
})