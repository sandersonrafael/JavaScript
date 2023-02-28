// 1-> retornar nomes das pessoas
// 2-> remover a chave "nome"
// 3-> adicionar chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// minha solução:

// 1
let nomes = pessoas.map((object => object.nome))
console.log(nomes)

// 2
let idades = pessoas.map(object => ({ idade :object.idade }))
console.log(idades)

// 3
let ids = pessoas.map(object => {
    return {
        id: Math.round(Math.random()*10000),
        nome: object.nome,
        idade: object.idade
    }
})
console.log(ids)
console.log(pessoas)

// solução do professor:
// 1 é igual

// 2
idades = pessoas.map(obj => {
    delete obj.nome     // delete funciona tanto para array como para object
    return obj          // ele estará alterando o array original, então cuidado
})
console.log(idades, 'ou seja: objeto original foi alterado para:', pessoas)

// 3
ids = pessoas.map((obj, indice) => {
    obj.id = indice + 1
    return obj
})
console.log(ids)