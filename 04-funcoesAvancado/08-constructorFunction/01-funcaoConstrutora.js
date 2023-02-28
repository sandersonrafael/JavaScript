// Similar às funções fábrica, retornam objetos
// Inicia o nome sempre com letra maiúscula, usando-se antes a palara "new"

// Criando função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.metodo = function () {
        console.log(`${this.nome} está falando sobre o método`)
    }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio')
const pessoa2 = new Pessoa('Maria', 'Joaquina')

console.log(pessoa1.nome, pessoa2.nome)
pessoa1.metodo()