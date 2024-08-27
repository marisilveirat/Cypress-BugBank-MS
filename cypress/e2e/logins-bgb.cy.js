describe('Fazendo login no BugBank com cenário infeliz e cenário feliz', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Campos de preenchimento vazio no login', () => {
    cy.get('.otUnI').click();
    cy.contains('É campo obrigatório').should('be.visible');
  });

  it('E-mail preenchido com formato inválido', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('mari');
    cy.contains('Formato inválido').should('be.visible');
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').clear().type('mari@teste.com');
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('22');
    cy.get('.otUnI').click();
    cy.contains('Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('be.visible');
  });

  it('Logar o usuário Sara no BugBank', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('mari@teste.com');
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('22');
    cy.get('.otUnI').click();
  });
});

