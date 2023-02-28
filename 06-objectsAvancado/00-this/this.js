// This referencia o local onde o termo está inserido.
// EX:

let nome = 'Joãozinho Gente Boa'
let outro = {
    nome: 'João Do Mal',
    homemRuim() {
        console.log(nome)
        console.log(this.nome)
    }
}
// Ao chamar os dois "nome", vemos que a palavra this diferencia qual é exibido
// Como:
outro.homemRuim()

// O this busca a variável dentro do closure (a variável mais próxima), enquanto sem o this, é a variável do Parent ou Prototype

// o comportamento do this varia se usado dentro de uma arrow function e de uma function expression comum
// quando o this é usado numa arrow function, ele trava a referência onde ele está inserido
// com a function expression, ele varia de acordo com quem chama
