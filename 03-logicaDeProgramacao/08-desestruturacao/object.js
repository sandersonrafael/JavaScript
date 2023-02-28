const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        logradouro: 'Av Brasil',
        numero: 320
    }
}

// notação de ponto
// const nome = pessoa.nome


// atribuição via desestruturação -> é possível setar valores padrões, como: {nome = 'Não existe', sobrenome, idade = '0'}
// é possível também alterar a chave pela notação :
const {nome: luiz = 'Nome dele', sobrenome= 'Sem sobrenome?', idade = 'Sem idade?'} = pessoa
console.log(luiz, sobrenome, idade, '<---- variável nome foi alterada para luiz, que teve valor padrão "Nome dele" ')
const {endereco: {logradouro, numero}, endereco} = pessoa
console.log(logradouro, numero, '<->', endereco); console.log()

const pessoa2 = {
    nome: 'Fábio',
    sobrenome: 'Augusto',
    idade: 34,
    endereco: {
        logradouro: 'Av Sorocaba',
        numero: 151
    }
}

const {nome,  ...resto} = pessoa2 // vai criar um object dividido em "nome / demais termos"
console.log(nome, resto)