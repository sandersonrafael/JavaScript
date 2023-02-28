// Criando métododos no prototype do objeto criado pela factory function

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        }
    }
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            configurable: true,
            enumerable: true,
            writable: true
        },
        sobrenome: {
            value: sobrenome,
            configurable: true,
            enumerable: true,
            writable: true
        }
    })
}
const p1 = criaPessoa('Pedro', 'Lucas')
const p2 = criaPessoa('Antonio', 'Jeronimo')
console.log(p1, p2)
p1.beber()
p2.comer()