/* components

Necessário criar uma pasta componentes dentro de src
ao criar cada componente, é importante fazer: import React, { Component } from 'react'
estas classes são chamadas de classes com estado, ou state

dentro do componente, é necessário gerar o:

export default class NomeDoComponente extends Component {
    render() {

    }
}

necessário importar o componente no app.js e utilizar ele como:

function() {
    return <NomeDoComponente />
}

nas classes dos componentes, dentro das tags, em vez de class, utilizamos className=""

quando o input muda, ele executa um evento chamado onChange

para no jsx utilizar javascript, usamos as chaves. Ex:

<div onChange={ scriptJavaScript } ></div>
ou
<h1>{scriptJavaScript}</h1>

no react, utiliza-se geralmente a nomenclatura de handleAlgumaCoisa quando se trabalha
com eventos do react

para criar css para o componente, criar arquivo: NomeDaClasse.css
importar o css pelo componente com:

import './NomeDaClasse.css'

*/
