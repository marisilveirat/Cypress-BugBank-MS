# Cadastro de novo usuário - BugBank:
Requisitos:
1 - Acessar https://bugbank.netlify.app/ e clicar em "Registrar".

## Cenário infeliz - formato de e-mail inválido:
O usuário preenche o campo "E-mail" com um endereço de e-mail inválido [mari]
O usuário preenche o campo "Nome" [Mari]
O usuário preenche o campo "Senha" com uma senha válida [22]
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior [22]
O usuário clica no botão "Cadastrar".

Resultados Esperados:
Mensagem de formato de e-mail inválido aparecerá.

## Cenário infeliz 2 - senhas não coincidem:
O usuário preenche o campo "E-mail" com um endereço de e-mail válido [mari@teste.com]
O usuário preenche o campo "Nome" [Mari]
O usuário preenche o campo "Senha" com uma senha válida [000]
O usuário preenche o campo "Confirmação de Senha" com senha diferente da inserida no passo anterior [22]
O usuário clica no botão "Cadastrar".

Resultados Esperados:
Mensagem de formato de senha inválido aparecerá.

## Cenário feliz:
O usuário preenche o campo "E-mail" com um endereço de e-mail válido [mari@teste.com]
O usuário preenche o campo "Nome" [Mari]
O usuário preenche o campo "Senha" com uma senha válida [22]
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior [22]
Marcar "Criar conta com saldo?".
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas e um número de conta deve ser gerado em pop-up [dados conta].

# Login de novo usuário:
Requisitos:
1 - Acessar https://bugbank.netlify.app/ e preencher os campos de login.
2 - Preencher os campos de login com os dados fornecidos no teste de cadastro anterior.

## Cenário infeliz - Campos de preenchimento vazios no login:
O usuário não preenche o campo "E-mail".
O usuário não preenche o campo "Senha".
O usuário clica no botão "Acessar".

Resultados Esperados:
O sistema não processa as informações e envia mensagem de campo de preenchimento vazio.

## Cenário infeliz - E-mail preenchido com formato inválido:
O usuário preenche o campo "E-mail" com um endereço de e-mail inválido [mari]
O usuário preenche o campo "Senha" com uma senha válida [22]
O usuário clica no botão "Acessar".

Resultados Esperados:
Mensagem de formato de e-mail inválido aparecerá.

## Cenário feliz:
O usuário preenche o campo "E-mail" com um endereço de e-mail válido [mari@teste.com]
O usuário preenche o campo "Senha" com uma senha válida [22]
O usuário clica no botão "Acessar".

Resultados Esperados:
Login é feito com sucesso e usuário é direcionado para a home - https://bugbank.netlify.app/home
#
# Tranferência para outro usuário:
Requisitos:
1 - Acessar https://bugbank.netlify.app/ e clicar em "Registrar".
2 - Criar nova conta para efetutar transferência para a conta de teste aqui utilizada, ao preencher "começar com saldo", R$1000,00 são adicionados automaticamente.
3 - O usuário preenche o campo "E-mail" com um endereço de e-mail válido [sarita@teste.com]
4 - O usuário preenche o campo "Nome" [Sara]
5 - O usuário preenche o campo "Senha" com uma senha válida [pet]
6 - O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior [pet]
7 - O usuário clica no botão "Cadastrar".

## Cenário infeliz de transação bancária - O usuário Mari [887-9] deve transferir para o usuário Sara [287-9] e deve falhar:
Usuário Mari efetura login [mari@teste.com] [22] e é direcionado para a home.
Usuário Mari clica em transferências e é direcionado para https://bugbank.netlify.app/transfer.
// digita número da conta do usuário Sara, e o dígito.
// digita o valor de R$100,00 em transferência.
// adiciona comentário "Ração pet".
// clica no botão "transferir agora".
Transferência deve falhar porque o banco de dados não suportou o teste.

Resultados Esperados:
Pop-up com mensagem "Conta inválida ou inexistente" deve aparecer.