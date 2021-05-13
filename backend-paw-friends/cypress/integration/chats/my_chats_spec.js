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

        //Ver seus chats
        cy.wait(2000)
        cy.get('#navbarTogglerDemo02 > ul > a:nth-child(3)').contains('Suas Mensagens').click()
        cy.wait(2000)
        cy.get('#IndexPageComponent > div.container-fluid.container-cards > div > div:nth-child(1) > div > div > a').contains('Abrir Chat').click()

        
    })
})