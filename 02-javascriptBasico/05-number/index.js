// javascript segue padrão IEEE 754-2008 para a precisão dos números decimais

let num1 = 10.2193829
let num2 = 2.5
let num3 = 5

// .toString() -> converter para string
// concatenar em vez de somar (transforma o primeiro em string e concatena com o 2º)
console.log(num1.toString() + num2)

// .toString(2) -> transformar em binário
console.log(num2.toString(2))

// .toFixed(casaDecimais) Casas decimais
console.log(num1.toFixed(4))

// Number.isInteger(termo) -> verificar se é inteiro
console.log(Number.isInteger(num3), Number.isInteger(num1))

// Number.isNaN(termo) -> verifica se é um "NaN"
console.log(Number.isNaN(5 * 'Peixe'), '<------ resulta em NaN')

// problema do javascript para Numbers
console.log(0.7 + 0.1)
// solução:
console.log(parseFloat((0.7+0.1).toFixed(2))) // toFixed transforma em string
console.log(Number((0.7+0.1).toFixed(2))) // necessário converter para number com parseFloat() ou Number()

// outra solução sem usar decimais
const num07 = 0.7; const num01 = 0.1;
console.log((num07 * 100 + num01 * 100) / 100)