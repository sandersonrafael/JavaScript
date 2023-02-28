// Retornar as pessoas que tem o nome com 5 letras ou mais
// Retornar as pessoas com mais de 50 anos
// Retornar as pessoas cujo nome termina com a


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

console.log(pessoas[0].nome.length)

// 1:

// o return só precisa dar verdadeiro ou falso. Assim o valor é incluído ou não
const nomeLongo = pessoas.filter(pessoa => pessoa.nome.length >= 5) // dá verdadeiro para os nomes >= 5, adicionando ao novo array
console.log(nomeLongo)

// 2:
const maiorIdade = pessoas.filter(pessoa => pessoa.idade > 50)
console.log(maiorIdade)

// 3: -> minha solução
const terminaComA = pessoas.filter(pessoa => pessoa.nome[pessoa.nome.length - 1] === 'a')
console.log(terminaComA)

// 3: -> solução do professor (novos conceitos)
const nomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminaComA)