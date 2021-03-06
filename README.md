# exemplo Cypress - CTG
 
Esse é um pequeno projeto com exemplos de uso do [Cypress](https://cypress.io)

### Requisitos
* Instale o [Visual Studio Code](https://code.visualstudio.com/download)
* Instale o [Node.js](https://nodejs.org/en/download/)

### Características
Nesse projeto, temos um exemplo de login na página de testes [Conduit](https://react-redux.realworld.io/#/login)

Os arquivos com casos de teste estão localizados na pasta [cypress/integration/conduit](https://github.com/leandrowcs/exemplo-cypress-CTG/tree/main/cypress/integration/conduit) e são apresentadas 3 formas de executar o mesmo teste de login:
1. Arquivo loginPage.spec.js - Com o código direto
2. Arquivo loginPageObj.spec.js - Usando PageObjects
3. Arquivo loginPageCommands.spec.js - Usando Cypress commands

Além disso, temos na pasta extras o arquivo [urlElements.spec.js](https://github.com/leandrowcs/exemplo-cypress-CTG/tree/main/cypress/integration/extras) que apresenta uma lista de comandos básicos para seleção de elementos e interação com eles.

Um pouco mais de detalhes sobre Cypress no post:
https://medium.com/@leandrowcs1985/vamos-falar-de-automa%C3%A7%C3%A3o-de-testes-web-cypress-6dfddfcb8d7d
