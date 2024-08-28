# Testes Automatizados no BugBank com Cypress

Este repositório contém testes automatizados para o **BugBank**, um aplicativo de banco simulado, desenvolvidos utilizando o framework [Cypress](https://www.cypress.io/). O objetivo dos testes é garantir que as funcionalidades principais do BugBank estejam funcionando corretamente, seja em cases de sucesso ou não, simulando cenários reais de uso final.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Impedimentos](#impedimentos)

## Sobre o Projeto

O **BugBank** é uma aplicação que simula operações bancárias, incluindo cadastro de contas, login, transferências, entre outros. Este projeto de testes visa assegurar que todas essas operações funcionem de maneira correta e segura, ele é um projeto em constante desenvolvimento por colaboradores e você pode encontrar sua documentação no repositório [do GitLab](https://gitlab.com/rafaelpfiorin/e2e_testing-java/-/blob/main/src/test/java/dev/rafael/automation/bugbank/selenium/tests/TestCase.java?ref_type=heads).


Os testes automatizados cobrem diferentes cenários, como casos de sucesso e falhas esperadas.

## Funcionalidades Testadas

- **Cadastro de Usuário**: Verifica se é possível criar novas contas com diferentes tipos de dados.
- **Login**: Testa a autenticação de usuários com credenciais válidas e inválidas.
- **Transferências**: Simula transferências entre contas, validando os valores antes e depois da operação.
- **Saldo e Extrato**: Confirma se o saldo é atualizado corretamente após transações e se o extrato reflete todas as operações realizadas.

## Tecnologias Utilizadas

- [Cypress]: Framework de testes automatizados E2E.
- [VSCode]: IDE de desenvolvimento
- [Node.js]: Ambiente de execução para JavaScript.

## Impedimentos🚨
#### - Transações/transferências ainda em construção.


#### - A aplicação não conta com um BANCO DE DADOS, todas as informações são armazenadas em memória local, sendo impossibilitado de fazer um cenário de transação positiva em Cypress!

