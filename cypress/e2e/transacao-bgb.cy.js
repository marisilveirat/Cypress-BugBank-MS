describe('Cenário infeliz de transação bancária', () => {
    beforeEach(() => {
        
        cy.visit('https://bugbank.netlify.app');
        cy.contains('Registrar').click();
        cy.get(':nth-child(2) > .input__default').type('mari@teste.com', { force: true });
        cy.get(':nth-child(3) > .input__default').type('Mari', { force: true });
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('22', { force: true });
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('22', { force: true });
        cy.get('label[id="toggleAddBalance"]').click({ force: true });
        cy.contains('Cadastrar').click({force: true});
        
        cy.visit('https://bugbank.netlify.app');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('mari@teste.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('22');
        cy.contains('Acessar').click();
    });

    it('Usuário Mari deve transferir para o usuário Sara e deve falhar', () => {

        cy.get('#btn-TRANSFERÊNCIA').should('be.visible').click();
        cy.url().should('include', '/transfer');

        cy.get(':nth-child(1) > .input__default').type('251');
        cy.get('.account__data > :nth-child(2) > .input__default').type('2');
        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('100');
        cy.get(':nth-child(3) > .input__default').type('Ração pet');

        cy.get('.style__ContainerButton-sc-1wsixal-0').click();

        cy.get('#modalText').should('contain.text', 'Conta inválida ou inexistente');

        cy.get('#btnCloseModal').click();
        cy.get('#btnExit').click();
    });
});

