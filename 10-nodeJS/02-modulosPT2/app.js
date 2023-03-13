// const multiplicacao = require('./modulo.js')
// console.log(multiplicacao(2, 10))

const Cidadao = require('./Z/modulo2')
const pessoa = new Cidadao('Lucas', 'Ribeiro')
console.log(pessoa.seApresentar())

// há duas variáveis que informam o nome do arquivo ou diretório

// console.log(__filename) -> caminho absoluto do arquivo atual
// console.log(__dirname) -> caminho absoluto da pasta atual

// path -> refere-se ao caminho que o node.js percorre
const path = require('path')

// para funcionar independente de sistema operacional:
// é possível manipular o caminho com o path.resolve(__dirname...) sem barra ou contrabarra:
console.log(__dirname)
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))
// o __dirname é diretório atual, '..' refere-se a voltar uma pasta ou diretório,
// 'arquivos' trata-se de um nome de pasta e quando houver extensão, como .js, 
// trata-se de arquivo