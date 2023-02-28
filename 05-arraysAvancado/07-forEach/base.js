// uma forma alternativa de iterar sobre arrays (somente)
// .forEach((valor, indice, array) => function )
// muito similar ao próprio for, unindo conceitos do for in e do for of

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numeros.forEach((valor, indice, array) => console.log(`${indice}:`, valor))