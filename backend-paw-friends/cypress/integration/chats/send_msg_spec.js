describe ('inital test', function () {
    it ('log in', function() {
        //Login
        cy.visit('/')
        cy.contains('Adote Já!').click()
        cy.url()
            .should('include', '/login')
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(1) > input').click().should('be.visible').type('brunoferrari')
        cy.wait(200)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > div:nth-child(2) > input').click().should('be.visible').type('password')
        cy.wait(200)
        cy.get('#IndexPageComponent > div.row.d-flex.justify-content-center.mt-4.mb-5 > div > div > div > form > button').contains('Entrar').click()

        //Mandar Msg
        cy.wait(200)
        cy.get('#IndexPageComponent > div.container-fluid.container-cards > div > div:nth-child(1) > div > div > a').click()
        cy.wait(20)
        cy.get('#IndexPageComponent > div > div > div > div.card.mb-3 > div > div > div > a:nth-child(1) > button').click()
        cy.wait(200)
        cy.url()
            .should('include', '/privateChat')
        cy.get('#IndexPageComponent> div.container-fluid.container-cards > div.container-fluid.privatechat > div.container-fluid.mesagebox.fixed-bottom > div > input.col-9').click().should('be.visible').type('Boa Noite!')
        cy.get('#IndexPageComponent> div.container-fluid.container-cards > div.container-fluid.privatechat > div.container-fluid.mesagebox.fixed-bottom > div > input').contains('Enviar').click()
    })
})