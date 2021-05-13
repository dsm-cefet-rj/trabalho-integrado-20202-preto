describe('Cypress de edição dos profiles', () => {
    it('Editando os profiles', () =>
    {
        cy.visit('http://localhost:3000/')
        cy.wait(400)

        // CreateAccount
        cy.get('[name=CreateAccount]').click()
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(1) > input').click().should('be.visible').type('FluLider')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(2) > input').click().should('be.visible').type('123')
        cy.wait(400)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > button').contains('Criar').click()
        cy.wait(2000)

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
        cy.get('[name=img]').clear().type('https://www.netflu.com.br/wp-content/uploads/2016/06/2-5.jpg');
        cy.wait(400)
        cy.get('[type=submit]').click();
        cy.wait(2000)

    })
})