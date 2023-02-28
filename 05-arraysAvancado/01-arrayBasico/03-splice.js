// splice(indiceInicial, indicesRemovidos, termosAdicionados...)
// pode realizar basicamente todas funcionalidades dos métodos básicos para arrays
// é permitido usar negativo também
// retorna um array com os itens removidos

// negativos    -5       -4        -3         -2        -1
// positivos     0        1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']


const removidos = nomes.splice(-2, 2)
console.log(nomes, removidos)

// para remover do índice informado até o final, usa-se (n, Number.MAX_VALUE)
nomes.splice(0, Number.MAX_VALUE)
console.log(nomes)

nomes.push('Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia')

nomes.splice(3, 0, 'Outro Eduardo', 'Antes do Gabriel')
console.log(nomes)

nomes.splice(3, 2)
console.log(nomes)
