const express = require('express')
const route = express.Router()

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Rafael', sobrenome: 'Ferreira'}
    console.log()
    console.log('Passei no middleware')
    console.log()
    next()
}

// página inicial
const homeController = require('./src/controllers/homeController')
route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
    console.log()
    console.log('Ainda estou aqui...')
    console.log(`'Último middleware' Verificar req.session: ${req.session.nome} ${req.session.sobrenome}`)
});
route.post('/', homeController.trataPost)

// rotas para contato
const contatoController = require('./src/controllers/contatoController')
route.get('/contato', contatoController.getContato)

module.exports = route