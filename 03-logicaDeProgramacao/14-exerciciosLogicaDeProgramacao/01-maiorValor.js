// Escreva uma função que recebe dois números e retorna o maior deles

// Solução 1
function maiorValor(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2
}
console.log(`O maior valor é: ${maiorValor(8, 5)}`)

// Solução 2 -> arrow function
const maxValor = (valor1, valor2) => valor1 > valor2 ? valor1 : valor2;
console.log(`O maior valor é: ${maxValor(15, 8)}`)