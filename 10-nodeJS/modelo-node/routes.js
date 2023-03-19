const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

const contatoController = require('./src/controllers/contatoController')
route.get('/contato', contatoController.getContato)

module.exports = route