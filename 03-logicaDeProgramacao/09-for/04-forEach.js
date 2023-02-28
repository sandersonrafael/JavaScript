// Método que que pode obter valor, índice e array
// Só funciona para Arrays

const nomes = ['Rafael', 'Ferreira', 'Flipe', 'Lucas']

nomes.forEach(function (valor, indice, vetor) {
    console.log(indice + 1 + ':', valor)
    indice + 1 === vetor.length ? console.log(vetor) : {}
})