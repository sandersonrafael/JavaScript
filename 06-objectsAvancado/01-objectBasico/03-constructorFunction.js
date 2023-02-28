// Padrão de projeto constructor function

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.falaOi = function() {
        console.log(`${this.nome} está falando oi!`)
    }
    Object.freeze(this) // os dados do objeto não serão alterados
}

const p1 = new Pessoa('Rafael', 'Ferreira')
console.log(p1, '<-- Pessoa é o constructor que criou este objeto')

// devido ao freeze, não é possível alterar nada
p1.idade = 35
delete p1.nome
console.log(p1, '<- não foi adicionada a idade')

p1.falaOi()