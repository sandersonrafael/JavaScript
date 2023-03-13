// testando a escrita, mas pegando a função por meio do module exports e require

const path = require('path') 
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')
// const escrever = require('./modulos/escrever')
const ler = require('./modulos/ler') // requer o módulo ler.js que tem uma função padrão

// const pessoas = [
//     {nome: 'João', sobrenome: 'Lucas'},
//     {nome: 'Felipe', sobrenome: 'Costa'},
//     {nome: 'Maria', sobrenome: 'Luara'},
//     {nome: 'Anderson', sobrenome: 'Rangel'}
// ]
// const json = JSON.stringify(pessoas, '', 1) 

// escrever(caminhoArquivo, json)

async function lerArquivo(caminho) { // função assíncrona que aciona a função do módulo ler
    const dados = await ler(caminho) // lê os dados do caminho informado, no caso, o json
    // return dados // retorna estes dados
    renderizaDados(dados)
}

// const dadosArquivo = lerArquivo(caminhoArquivo) // chama a async funcion com o then() pois é uma promise
//     .then(dados => console.log(dados)) // loga no console os dados obtidos da leitura do json

function renderizaDados(dados) {
    dados = JSON.parse(dados) // transforma os dados novamente em objeto
    dados.forEach(val => console.log(val)) // percorre o array e exibe cada objeto dentro de cada índice
}
lerArquivo(caminhoArquivo)