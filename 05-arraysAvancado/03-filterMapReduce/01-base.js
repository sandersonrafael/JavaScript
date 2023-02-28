// .filter((valor, indice, vetor) => function)
// a function só precisa retornar true ou false. Se true, o termo estará no novo array
// o filter não altera os elementos, mesmo que a function retorne alguma alteração, pois só verifica se é true ou false
// Retorna um array com o mesmo tamanho ou menor


// Ex: retornar números maiores que 10 num novo array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// com for
const maiorQue10 = []
for (let value of numeros) if (value > 10) maiorQue10.push(value)
console.log(maiorQue10)

// método .filter()
const filtrados1 = numeros.filter(function (valor) {
    return valor > 10
})
console.log(filtrados1)

// com arrow function -> possui return implícito e não precisa usar () se for 1 parâmetro somente
const filtrados2 = numeros.filter(valor => valor > 10)
console.log(filtrados2)

// usando também índice e array (exibindo só no final da iteração)
const filtrados3 = numeros.filter((valor, indice, array) => {
    console.log(`Índice ${indice}:`, `Valor ${valor}:`)
    if (indice == array.length - 1) console.log(array)
    return valor > 10
})
console.log(filtrados3)