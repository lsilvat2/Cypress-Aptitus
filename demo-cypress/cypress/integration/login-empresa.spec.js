describe('login empresa', () => {
    it('login', () => {
        cy.visit('https://pre4c.aptitus.com/empresa')
        cy.get(':nth-child(2) > .btn').click();
        cy.get('#txtUser').type("leslie.silva@orbis.com.pe");
        cy.get('#txtPasswordLogin').type("ecodigital");
        cy.get('#frmUserLogIn > .g-btn').click();
        cy.get('.js-premium')
            .contains('Comprar')
            .click({ force: true });
    })
})