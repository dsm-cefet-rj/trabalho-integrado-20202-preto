describe('Cypress dos profiles', () => {
    it('Criando os profiles', () =>
    {
        cy.visit('http://localhost:3000/')
        cy.get('#IndexPageComponent > div.row.mt-2 > div > a').contains('Adote Já!').click()
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

        // Criando conta
        cy.get('#navbarTogglerDemo02 > ul > a:nth-child(6)').click()
        cy.get('[name=nome]').clear().type('Cypress');
        cy.wait(400)
        cy.get('[name=sobrenome]').clear().type('Testônio');
        cy.wait(400)
        cy.get('[name=cpf]').clear().type('12345678900');
        cy.wait(400)
        cy.get('[name=cidade]').clear().type('Rio');
        cy.wait(400)
        cy.get('[name=cep]').clear().type('12345667');
        cy.wait(400)
        cy.get('[name=telefone]').clear().type('99123456789');
        cy.wait(400)
        cy.get('[name=email]').clear().type('email@teste.com');
        cy.wait(400)
        cy.get('[name=user]').clear().type('usuteste');
        cy.wait(400)
        cy.get('[name=senha]').clear().type('teste123');
        cy.wait(400)
        cy.get('[name=img]').clear().type('https://www.netflu.com.br/wp-content/uploads/2016/06/2-5.jpg');
        cy.wait(400)
        cy.get('[type=submit]').click();
        cy.wait(2000)

    })
})


