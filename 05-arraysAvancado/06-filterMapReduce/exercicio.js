// retornar o somatório do dobro de todos os números pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// minha solução
const pares = valor => valor % 2 === 0
const dobro = valor => valor * 2
const somatorio = (acumulador, valor) => acumulador + valor
console.log(numeros.filter(pares).map(dobro).reduce(somatorio))

