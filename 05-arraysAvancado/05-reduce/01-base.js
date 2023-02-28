// utilizada geralmente para reduzir o array a um único elemento
// reduce.((acumulador, valor, indce, array) => {function}, valorInicialAcumulador)

// somar todos números (reduce)
// retornar um array com os pares (filter)
// retornar um array com os valores dobrados (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// 1
const soma = numeros.reduce((acumulador, valor) => acumulador += valor, 0)
console.log('A soma é: ', soma)

// 2
const pares = numeros.filter(valor => valor % 2 === 0)
console.log(pares)
console.log(numeros)

// 3
const dobro = numeros.map(valor => valor * 2)
console.log('dobro: ', dobro)
console.log('original: ', numeros)