const express = require('express')
const route = express.Router()

// página inicial
const homeController = require('./src/controllers/homeController')
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// rotas para contato
const contatoController = require('./src/controllers/contatoController')
route.get('/contato', contatoController.getContato)

module.exports = route