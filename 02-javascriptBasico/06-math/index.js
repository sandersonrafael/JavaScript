// Arredondamentos
let num1 = 9.54578
console.log(Math.floor(num1)) // para baixo
console.log(Math.ceil(num1)) // para cima
console.log(Math.round(num1)) // arredonda para mais próximo

// Maior ou menor número
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50), 'é o maior')
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50), 'é o menor')

// Math.random() gera um número aleatório entre 0 e 1. Pode usar intervalos da seguinte forma:
const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatorio)

// Math.PI -> valor de pi
console.log(Math.PI)

// Math.pow(n, e) -> eleva o primeiro termo ao segundo
console.log(Math.pow(10, 2))
console.log(10 ** 2) // equivalente