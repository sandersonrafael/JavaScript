// usa-se a palavra reservada class, nome da classe (1ª letra maiúscula) e dentro: constructor() {}

// Protótipo: Uma grande vantagem das classes, é que seus métodos são inseridas já no protótipo do objeto criado e não no próprio objeto
// Economizando mais espaço na memória, pois são métodos globais e não de cada objeto

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = nome
    }

    falar() {       // estes métodos estão atrelados ao Pessoa.prototype, sem necessidade de assimilar depois
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}
// instanciando
const p1 = new Pessoa('Cebalina', 'Ricarda')

// É possível ver no console do navegador que nenhuma das pessoas criadas
// possui os métodos criados. Ou seja, estão realmente no seu prototype
console.log(p1)

// Comparando com factory function:
// Para obter o mesmo resultados:
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}
Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está comendo`)
}
Pessoa2.prototype.beber = function() {
    console.log(`${this.nome} está bebendo`)
}
const p2 = new Pessoa2('Cebalina', 'Ricarda')
// No console do navegador, dá para ver que p1 e p2 são iguais, mudando apenas o constructor,
// pois um é uma classe e outro é uma função construtora
console.log(p2)