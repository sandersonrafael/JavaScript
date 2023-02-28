// get: faz com que o retorno de uma função seja adquirida diretamente, sem precisar invocar com ()
// "Finge" que a função é um atributo

// ex:
function criaCaneta(comprimento, diametro, ponta) {
    return {
        comprimento,
        diametro,
        ponta,
        tipoDeCaneta() {
            if (ponta <= 0.5) return `Caneta para desenho`
            if (ponta > 0.5 && ponta <= 0.7) return `Caneta para redação`
            if (ponta > 0.7) return `Caneta para rascunho`
        },
        get canetaCompleta() {
            return `A caneta possui ${this.comprimento}cm, com diâmetro do tubo de ${this.diametro}cm e diâmetro de ponta de ${this.ponta}mm`
        }
    }
}
const caneta1 = criaCaneta(15, 0.7, 0.7)
console.log(caneta1.tipoDeCaneta())
console.log(caneta1.canetaCompleta) // se botar canetaCompleta(), apresentará erro, pois foi convencionado a não ser tratado como uma função
console.log()

// set: permite que os valores passados como parâmetro interajam com o get

// Ex:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(vetorNome) {
            this.nome = vetorNome[0]
            this.sobrenome = vetorNome[1]
        }
    }
}
const pessoa1 = criaPessoa('Marcos', 'Vinícios')
console.log(pessoa1.nomeCompleto) // chamou o get

pessoa1.nomeCompleto = (['Felipe', 'Josias']) // modificou os termos do nome através do set
console.log(pessoa1.nomeCompleto, '<->', pessoa1.nome, pessoa1.sobrenome) // chamou o get, agora já modificado