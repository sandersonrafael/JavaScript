// .map((valor, indice, array) => function)
// o map transforma os valores dos elementos. Sempre volta a mesma quantidade de valores, mas todos alterados

// Ex: retornar o dobro dos valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map(valor => valor * 2)
console.log(dobro)
