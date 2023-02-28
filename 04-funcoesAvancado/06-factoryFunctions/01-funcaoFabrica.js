// Tratam-se de funções que retornam (criam) objetos

// Ex:
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}.`
        }
    }
}
const pessoa1 = criaPessoa('Luiz', 'Otávio')
console.log(pessoa1.fala('Javascript'), '<-- foi necessário chamar a função com: ()')
console.log(criaPessoa('João', 'Victor').fala('mercado de trabalho'))