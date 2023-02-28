// O operador rest, "...alguma coisa", quando usado como parâmetro de função, cria um array com os valores de todas as entradas passadas pelo usuário, como:
// o parametro rest sempre precisa ser o último parâmetro da função, ou dá erro.

// Criar uma função que realiza a operação informada, com todos os demais termos (...rest). Ex:
function matematica(operacao, ...valores) {
    let total = 0
    for (let valor of valores) {
        if (operacao === '+') total += valor
        if (operacao === '-') total -= valor
        if (operacao === '*') {
            total === 0 ? total = valor : total *= valor
        }
        if (operacao === '/') {
            total === 0 ? total = valor : total /= valor
        }
    }
    console.log(total, 'de', valores)
}
matematica('/', 1, 2, 3, 4)