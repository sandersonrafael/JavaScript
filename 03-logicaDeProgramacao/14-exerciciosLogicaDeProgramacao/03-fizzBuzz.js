// Escrever função que recebe um número e retorna:
// Checa se realmente é um número
// Só permite números de 0 a 100
// Fizz se o número é divisível por 3
// Buzz se o número é divisível por 5
// FizzBuzz se é divisível por 3 e por 5
// O próprio número se ele não é divisível por 3 nem 5

// Minha Solução
function fizzBuzz(n) {
    if (typeof n === 'number') {
        if (n >= 0 && n <= 100) {
            if ( n % 3 === 0 && n % 5 === 0) {
                return 'FizzBuzz'
            } else if (n % 3 === 0) {
                return 'Fizz'
            } else if (n % 5 === 0) {
                return 'Buzz'
            } else {
                return n
            }
        } else {
            return 'Digite um número de 0 a 100'
        }
    } else {
        return 'Digite apenas number'
    }
}
const t = fizzBuzz
console.log(t(15), '<->', t(3), '<->', t(5), '<->', t(7), '<->', t('15'), '<->', t(-1))

// Solução do professor
function fizzBuzzP (numero) {
    if (typeof numero !== 'number') return 'Não é número'
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

for (let n = 0; n <=100; n++) {
    console.log(`${n}:`, fizzBuzzP(n))
}