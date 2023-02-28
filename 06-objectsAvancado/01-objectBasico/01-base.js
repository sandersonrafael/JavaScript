// objeto literal: usa chaves
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
console.log(pessoa.nome, pessoa.sobrenome) // ou
console.log(pessoa['nome'], pessoa['sobrenome'])

// outra maneira:
const chave = 'nome'
console.log(pessoa[chave])

// object Constructor e métodos(funções dentro dos objetos)

const pessoa1 = new Object()
pessoa1.nome = 'Rafael'
pessoa1.sobrenome = 'Ferreira'
pessoa1.idade = 26
pessoa1.falarNome = function() { 
    console.log(`Meu nome é: ${this.nome}`)
}
pessoa1.getDataNascimento = function() {
    console.log((new Date()).getFullYear() - this.idade)
}
pessoa1.falarNome()
pessoa1.getDataNascimento()
