/* O javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro*/

// Definição de protótipo:
/* Usado para se referir ao que foi criado pela primeira vez, servindo
de modelo ou molde para futuras produções */

/* Todos os objetos têm uma referência interna para um protótipo (__proto__)
que vem de uma propriedade prototype da função construtora que foi usada para criá-lo.
Quanto tentamos acessar um membro do objeto, primeiro o motor do JS vai
tentar encontrar este membro no próprio objeto e depois na cadeia de protótipos
até o topo (null), até encontrar ou não tal membro */

/* 
Seguimos a sequência de protótipos para este exemplo: 
Object.prototype -> é protótipo de -> Pessoa.prototype -> que é protótipo de -> pessoa1 
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}
// Criando propriedade no protótipo da constructor
Pessoa.prototype.propriedadeQualquer = 'Propriedade qualquer'

// Criando métodos no protótipo da constructor 
// não pode ser arrow function, pois ela trava o this onde foi criada e precisamos que o this varie para cada objeto criado
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// pessoa1.__proto__ === Pessoa.prototype

// instância
const pessoa1 = new Pessoa('Sanderson Rafael', 'da Cunha Ferreira') // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'Pereira') // Pessoa = Função construtora

console.dir(pessoa1)
console.log(pessoa1.propriedadeQualquer)
console.log(pessoa1.nomeCompleto())

console.log(pessoa1.__proto__ === Pessoa.prototype, Pessoa.prototype === Object.prototype)

