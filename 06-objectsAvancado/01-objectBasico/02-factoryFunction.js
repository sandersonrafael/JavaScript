// padrão de projeto factory functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {    // simula que o método é um atributo normal, não sendo necessário chamar como função: ()
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Rafael', 'Ferreira')
console.log(p1.nomeCompleto)