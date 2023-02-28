// As funções não apresentam erros se usar parâmetros não solicitados
// arguments -> usando a palavra reservada function (não funciona para arrow), armazena todos os parâmetros em uma expressão denominada arguments, como um object com chaves similares aos índices dos arrays, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ...
function funcao() {
    console.log(`o valor do arguments[10] é: ${arguments[10]}`)
    console.log(arguments)
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function somaArguments() {
    let total = 0
    for (i in arguments) {
        total += arguments[i]
    }
    return total
}
console.log(`O resultado é: ${somaArguments(1, 2, 3, 4)}`)

// Método alternativo para captar o arguments em arrow function através do rest operator

const argumentsArrow = (...arguments) => {
    console.log(arguments)
    console.log(arguments[0])
}
argumentsArrow(1, 2, 3, 4, 5, 6, 7, 8, 9)