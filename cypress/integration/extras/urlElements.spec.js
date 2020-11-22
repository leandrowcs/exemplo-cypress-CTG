/// <reference types="cypress" />

describe('Testando elementos do navegação e localização', () => {

    it.only('Elementos de navegação', () =>  {
        cy.visit('https://example.cypress.io/')
        cy.get('h1').should('contain', 'Kitchen Sink')

        cy.visit('https://example.cypress.io/commands/navigation')
        cy.get('h1').should('contain', 'Navigation')

        cy.go('back')
        cy.get('h1').should('contain', 'Kitchen Sink')

        cy.go('forward')
        cy.get('h1').should('contain', 'Navigation')

        cy.go(-1)
        cy.get('h1').should('contain', 'Kitchen Sink')

        cy.go(1)
        cy.get('h1').should('contain', 'Navigation')

        cy.reload()
        cy.get('h1').should('contain', 'Navigation')

    })

    it.only('Elementos de localização', () => {
        cy.visit('https://react-redux.realworld.io/#/login')

        cy.url().should('contain', 'https://react-redux.realworld.io/#/login')
        cy.url().should('include', '/login')

        cy.location('protocol').should('eq', 'https:')
        cy.location('hash').should('contain', '#/login')
        cy.location('href').should('contain', 'https://react-redux.realworld.io/#/login')

        cy.visit('https://react-redux.realworld.io/#/register')
        
        cy.location('host').should('eq', Cypress.env('hostname'))

    })

    it('Encontrando diferentes elementos', () => {
        // Encontrar elemento(s) por class name
        cy.get('.dropdown-menu')
        // Encontrar elemento(s) por data attribute
        cy.get('[data-test-id="test-example"]')
        // Criar e usar um alias
        cy.get('button[type=submit]').as('submitBtn')
        //...code code code...
        // E depois usar o elemento criado através do seu alias: submitBtn
        cy.get('@submitBtn')     

        // Encontrar o primeiro elemento na página que contenha a palavra Login
        cy.contains('Login')
        // Encontrar o primeiro elemento na página que começa com a letra L
        cy.contains(/^L\w+/)
        // É possível especificar o tipo do elemento que contenha a palavra Login
        cy.contains('ul', 'Login')  

        // Quando buscamos mais precisão, podemos então combinar os dois métodos
        cy.get('#form').contains('Login')
        // Dessa forma vamos buscar dentro do elemento com ID #form, outro que possua
        // a palavra Login

    })

    it('Interagir com elementos', () => {
        // Selecionar o primeiro elemento do tipo li
        cy.get('li').first()      // retorno <li>Um</li>

        // Selecionar o último elemento do tipo li
        cy.get('li').last()      // retorno <li>Cinco</li>

        // Selecionar o segundo elemento do tipo li
        cy.get('li').eq(1)      // retorno <li>Dois</li>

        // Selecionar o penultimo elemento do tipo li
        cy.get('li').eq(-2)      // retorno <li>Quatro</li>


        // parent 
        cy.get('li.active').parent()    // retorno .sub-nav

        // parents
        cy.get('li.active').parents()   // retorno [.sub-nav, li, .main-nav]

        // children
        cy.get('ul.sub-nav').children()     // retorno [<li>Install</li>,
                                            // <li class='active'>Build</li>,
                                            // <li>Test</li>]

        cy.get('ul.sub-nav').children('.active')    // retorno [<li class='active'>Build</li>]

        // siblings
        cy.get('.active').siblings()    // retorno [<li>Install</li>, <li>Test</li>]

        cy.get('form').within(($form) => {
            // você tem acesso ao formulário encontrado por 
            // meio do objeto jQuery $form se precisar
          
            // cy.get() irá apenas procurar por elementos dentro do formulário,
            // não dentro de todo o documento da página
            cy.get('input[name="email"]').type('leandrowcs@gmail.com')
            cy.get('input[name="password"]').type('12345678')
            cy.root().submit()
        })

        // Clicar em um botão
        cy.get('button').click() 

        // Clicar no primeiro elemento com o texto "Welcome"
        cy.contains('Welcome').click() 


        // Clique duplo em um botão
        cy.get('button').dblclick()

        // Digitar 'Hello, World' no elemento 'input'
        cy.get('input').type('Hello, World')

        // Digitar uma combinação de teclas
        cy.get('input').type('{shift}Q')     
        // Isso é o mesmo que um usuário segurar SHIFT, então apertar Q

        // Limpar o campo do tipo 'text'
        cy.get('[type="text"]').clear()

        // Marcar todas as opções com checkbox
        cy.get('[type="checkbox"]').check()

        // Marcar o primeiro checkbox
        cy.get('[type="checkbox"]').first().check()

        // Selecionar todos radios
        cy.get('[type="radio"]').check()

        // Selecionar o radio com valor igual a ‘US’
        cy.get('[type="radio"]').check('US')

        // Marcar todos os checkboxes com valor ‘ga’ e ‘ca’
        cy.get('[type="checkbox"]').check(['ga', 'ca'])

        // Desmarcar todas os checkboxes
        cy.get('[type="checkbox"]').uncheck()

        // Desmarcar o primeiro checkbox
        cy.get('[type="checkbox"]').first().uncheck()

        // Desmarcar os checkboxes com valores ‘ga’ e ‘ca’
        cy.get('[type="checkbox"]').uncheck(['ga', 'ca'])


        // Selecionar a opção com valor '456' 
        cy.get('select').select('456')

        // Selecionar as opções com textos “apples” e “bananas”
        cy.get('select').select(['apples', 'bananas'])


    })

})
