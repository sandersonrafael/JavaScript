/* routes

criar arquivo routes.js e dentro dele escrever:
const express = require('express')
const route = express.Router()

no arquivo routes, em vez do app.get, ele utiliza o router.get

criar pasta controllers
será criado um arquivo controller.js para cada página acessível ao usuário, exportando sua função
para o arquivo routes.js

no routes, serão linkados todos os controllers através do:
const nomeDoController = require('caminhoDoController')
ex:
const homeController = require('./controllers/homeController')

no route.get, será usado agora a constante criada do módulo com o nome da função, como:
               nomeDoModulo   nomeDaFuncaoNoModulo
route.get('/', homeController.paginaInicial);

AO FINAL do routes.js, é necessário exportar o módulo completo, para ser obtido
por require('caminho') pelo server.js

exporta fazendo ao final do documento:

module.exports = route -> esta notação por si só, irá exportar todos os controllers que foram associados ao explress.Route(), que é a constante route em si

no server.js, é necessário requerer o routes com a notação:
const routes = require('./routes.js')

e após isto, chamar o routes através do app.use(routes)

*/