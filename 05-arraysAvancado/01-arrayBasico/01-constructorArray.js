// valores por referência
//                          0         1        2
const nomes = new Array('Eduardo', 'Maria', 'Joana')
nomes[2] = 'João' // altera elemento
console.log(nomes)

delete nomes[2] // deleta o índice mas deixa vazio
console.log(nomes)