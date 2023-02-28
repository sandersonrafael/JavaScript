// pode-se usar o parseInt:
let num1 = parseInt('5') // só funciona para inteiro, ignora depois da vírgula (ponto)
console.log(5 + num1) // o resultado esperado é 10 e não 55
console.log(typeof num1)

num1 = parseFloat('5.2') // funciona para números reais
console.log(5 + num1)
console.log(typeof num1)

num1 = Number('5.1234') // é abrangente
console.log(5 + num1)
console.log(typeof num1)