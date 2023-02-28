// Declaração de função (Function hoisting)

// Independente de onde a função é declarada, ela é lida com prioridade pelo javascript e pode ser usada antes da linha que é registrada
falaOi()

// É possível retornar algum valor (somente um return. Assim que encontra um return, a função encerra a execução)
function falaOi() {
    console.log('Oi')
}

// First-class objects (Objetos de primeira classe) -> as funções podem ser usados como dados, variáveis, etc
// function expression
const souUmDado = function() {
    console.log('Sou um dado.')
}
souUmDado()

// Devido a isso, é possível usar uma função dentro do dado de outra função (uma função chama outra)
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
    funcao();
}
executaFuncao(souUmDado)

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function')
}

// Dentro de objeto como método. Há duas maneiras de criar:
const objeto = {
    pessoa: 'Rafael',
    reclamar: function() {
        console.log('Que chato!')
    },
    falar() {
        console.log(`${this.pessoa} está falando`)
    }
}
objeto.reclamar()
objeto.falar()
