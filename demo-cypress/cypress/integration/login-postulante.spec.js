
describe('proceso de compra', () => {
    it('login', () => {
        cy.visit('https://pre4c.aptitus.com');
        cy.get('.second > .js-modal-login').click();
        cy.get('#txtUser').type('leslie.silva@orbis.com.pe');
        cy.get('#txtPasswordLogin').type('ecodigital');
        cy.get('#frmUserLogIn > .g-btn').click();
    })
})