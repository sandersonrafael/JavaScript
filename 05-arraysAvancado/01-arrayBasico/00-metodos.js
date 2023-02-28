const nomes = ['Eduardo', 'Maria', 'Joana']

// tamanho do array -> atributo length
// delete array[i] -> deleta um termo no array, mas deixa espaço vazio

// métodos principais
// .pop() remove termos no final do array
// .shift() remove termos no início do array
// .push(elemento) adiciona elemento no final do array
// .unshift(elemento) adiciona elemento no início do array
// .slice(iInicialIncluso, iFinalNaoIncluso) "fatia" o array, criando um novo sem alterar o inicial. Pode usar negativo também, como (1, -2) -> O novo array inicia do índice 1 e eliminará os dois últimos termos do array anterior
// .split('termo') separa a string em arrays excluindo o termo splitado
// .join('termo') une os índices do array em uma string, pondo o termo informado entre as palavras
// .indexOf('termo') retorna o índice que o termo se encontra. Se não possui tal termo no array, retorna -1


console.log(nomes.length)

console.log(nomes.shift())

console.log(nomes.pop())

console.log(nomes)

nomes.push('Anderson')

nomes.unshift('Paioba')

console.log(nomes)

console.log(nomes.slice(0, -1))

nomes.push('Finian', 'Alberto', 'Walderbson')
console.log(nomes)

console.log(nomes.slice(1, 3)) // criou um novo array
console.log(nomes) // o anterior continuou inalterado

const nome = 'Sanderson Rafael da Cunha Ferreira'

const nomes2 = nome.split(' ')
console.log(nomes2)

console.log(nomes2.join(' '), '<-- voltou a ser o nome normal')

// Método split realizado com for
let palavra = ''
let arrayPalavras = []
console.log(nome.length)
for (let i in nome) {
    if (nome[i] !== ' ') palavra += nome[i]
    if (nome[i] === ' ' || Number(i) + 1 === nome.length) {
        arrayPalavras.push(palavra)
        palavra = ''
    }
}

console.log(arrayPalavras)
