// module.exports = function (x, y) { // similar ao default do ES6
//     return x * y
// }
module.exports = class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    seApresentar() {
        return `Olá, eu me chamo ${this.nome} ${this.sobrenome}!`
    }
}