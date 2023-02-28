// similar ao define property, mas se aplica para todas as chaves
// se não informar alguma propridade, pode assumir o valor de false por padrão
function Pessoa(nome, sobrenome, idade) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        sobrenome: {
            value: sobrenome,
            writable: false,
            enumerable: true
        },
        idade: {
            value: idade,
            configurable: true,
            enumerable: false
        }
    })
}
const pessoa1 = new Pessoa('Sanderson Rafael', 'da Cunha Ferreira', 26)
console.log(pessoa1)
console.log(pessoa1.idade)
