// retornar a pessoa mais velha
const pessoas = [
    { nome: 'Wallace', idade: 47 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Letícia', idade: 19 }
]

// minha solução
const maisVelho = pessoas.reduce((acumulador, pessoa) => acumulador.idade > pessoa.idade ? acumulador : pessoa)
console.log(maisVelho)

// solução do professor
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)