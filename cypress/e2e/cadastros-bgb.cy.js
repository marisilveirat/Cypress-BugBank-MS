describe('Fazendo cadastro no BugBank com cenário infeliz e cenário feliz', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/');
    cy.get('.ihdmxA').click();
  });

  it('Formato de e-mail inválido', () => {
    cy.get(':nth-child(2) > .input__default').type('sarita', { force: true });
    cy.get(':nth-child(3) > .input__default').type('Sara Cachorro', { force: true });
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', { force: true });
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', { force: true });
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });

  });

  it('Senhas não coincidem', () => {
    cy.get(':nth-child(2) > .input__default').type('sarita', { force: true });
    cy.get(':nth-child(3) > .input__default').type('Sara Cachorro', { force: true });
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', { force: true });
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('0123', { force: true });
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    cy.contains('#modalText').should('be.visible');
  });

  it('Cadastro é feito com sucesso', () => {
    cy.get(':nth-child(2) > .input__default').type('sarita@cachorro.com', { force: true });
    cy.get(':nth-child(3) > .input__default').type('Sara Cachorro', { force: true });
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', { force: true });
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123', { force: true });
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
  });
});
  
    