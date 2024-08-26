Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

Com o Cypress, escreva os códigos dos seguintes testes:

    1 - Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”:
        O usuário acessa a landing page;
        O usuário clica no botão 'Ver pets'

    2 - Visite a página de principal do AdoPet e teste os botões header:
        O usuário acessa a landing page;
        O usuário clica no ícone "HOME";
        O usuário clica no ícone "MENSAGEM";

    3 - Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.

Caso de cenário triste:
    1 - O usuário clicou em "Cadastrar";
    2 - O usuário colocou apenas o e-mail dele;
    3 - O usuário tentou clicar em "Cadastrar";
    > Responsiva do sistema: Em "Senha" deve aparecer "Crie uma senha";
                             Em "Confirme sua senha" deve aparecer "Repita a senha criada acima";
    Resultados esperados:
    Ele valida o campo "Nome" mesmo vazio;
    Ele não valida os campos de e-mail e senha e retorna uma mensagem responsiva;