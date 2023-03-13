/* 
const fs = require('fs').promises    // // file system -> manipular arquivos | usar promises para só resolver após retornar algo
const path = require('path') // manipular caminhos dos diretórios e arquivos

const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt') 
// __dirname é o caminho absoluto da pasta atual e cada vírgula significa uma barra ou contrabarra

// escrever arquivo fs.writeFile()
fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf-8' }) 
// encoding não é essencial porque o utf-8 já vem por padrão

// flag: 'w' indica que se o arquivo já existir, apaga tudo e escreve novamente o solicitado;
// flag 'a', append, fará com que cada vez que execute, ele escreva a mais o solicitado, sem apagar o anterior no arquivo


// ao executar, será criado um arquivo com a frase: Frase 1
 */

/* 
// para transformar um objeto em json:
const fs = require('fs').promises
const path = require('path') 
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json') 

const pessoas = [
    {nome: 'João', sobrenome: 'Lucas'},
    {nome: 'Felipe', sobrenome: 'Costa'},
    {nome: 'Maria', sobrenome: 'Luara'},
    {nome: 'Anderson', sobrenome: 'Rangel'}
]
const json = JSON.stringify(pessoas, '', 1) // converte o objeto para json (objeto(de arrays), separação, número de linhas)

fs.writeFile(caminhoArquivo, json, { flag: 'w' })
 */

// exportando para o app.js
const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'})
}