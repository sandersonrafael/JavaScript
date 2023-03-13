// // para obter um módulo, utiliza-se o require para o node.js
// // const mod1 = require('./01-modulo.js')
// // console.log(mod1.falaNome())
// // desestruturação também é possível:
// const { nome, sobrenome, falaNome } = require('./01-modulo.js')
// console.log(nome, sobrenome, '->', falaNome())

// quando se utiliza caminho, como ./nome.extensão , estamos nos referindo a módulos nossos, que criamos
// em caso de módulo padrão ou da pasta node_modules, basta utilizar o nome, como:
const path = require('path') // -> módulo padrão do node

const { Pessoa } = require('./01-modulo')
const p1 = new Pessoa('Joãozin')
console.log(p1)

// instalando axios no terminal -> npm init -y | npm i axios
const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))