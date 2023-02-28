// Similar ao for in, porém, já retorna o valor em vez de o índice, não sendo necessário digitar: array[i], digitando somente: i
// Só funciona para array e string

// Array
const pessoas = ['LUiz', 'Otávio', 'Henrique']
for (valor of pessoas) {
    console.log(valor)
}

// String
const nome = 'Luiz Otávio'
for (valor of nome) {
    console.log(valor)
}
