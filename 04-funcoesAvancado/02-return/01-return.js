// O return retorna um valor para a função e encerra a sua execução. Só um return é lido por função.
// Nem toda função precisa retornar algo
// Ex1:
function soma (a, b) {
    return a + b
}
let soma1 = soma(3, 5)
console.log(soma1)

// Ex2:
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}
const pessoa1 = criarPessoa('Matheus', 'Felipe')
console.log(pessoa1)