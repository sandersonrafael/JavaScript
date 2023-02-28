// this.variavel permite acessar uma variável do próprio objeto em uma função
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`Olá! Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!`)
    },
    incrementaIdade() {
        this.idade++
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
}

// função factory -> cria objetos através de argumentos
const criarHumano = (nome, sobrenome, idade) => {return {nome, sobrenome, idade}}
const humano1 = criarHumano('João', 'Pedro', 23)
const humano2 = criarHumano('Maria', 'Lucia', 33)
const humano3 = criarHumano('Pedro', 'Henrique', 22)
const humano4 = criarHumano('Henrique', 'Guilherme', 27)
const humano5 = criarHumano('Babel', 'Souza', 28)
console.log(humano1.nome, humano5.idade, humano3.sobrenome)