/* Senha

não devemos colocar a senha do servidor dentro do próprio server, pois pode ficar acessível para desenvolvedores mal intencionados
para isso, utilizamos um pacote do NPM que se chama dotenv

npm install dotenv
esse comando fará com que seja possível buscar a senha de um arquivo pessoal não acessível externamente
botar no início do server.js:
require('dotenv').config()
criar arquivo com nome ".env" na raiz do projeto e digitar:
CONNECTIONSTRING=CHAVEDECONEXAODOMONGODB (buscar o link de conexão com a base de dados)

para conectar com a base e validar os dados, é necessário instalar o mongoose
npm install mongoose

para iniciar, no server, após a definição: app = express() ->

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true})
    .then(() => app.emit('Inicializado')) // o mongoose.connect é uma promise e é necessário usar o then pois ele atrasa a conexão após o start do server
    .catch(e => console.log(e))

no final do arquivo, botamos a função listen dentro de um app.on('Inicializado', () => {listen})
app.on('Inicializado', ())

no arquivo .gitignore, para que a senha não seja acessível, ignorar: 

node_modules
.env


criar pasta models dentro do src -> os models terão letras maiúsculas porque são classes

dentro do modele HomeModel.js, criar

const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema ({
    titulo: { type: String, required: true }
})

*/
