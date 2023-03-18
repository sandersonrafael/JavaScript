/* Senha

não devemos colocar a senha do servidor dentro do próprio server, pois pode ficar acessível para desenvolvedores mal intencionados
para isso, utilizamos um pacote do NPM que se chama dotenv

npm install dotenv
esse comando fará com que seja possível buscar a senha de um arquivo pessoal não acessível externamente

para conectar com a base e validar os dados, é necessário instalar o mongoose
npm install mongoose

para iniciar, no server, após a definição: app = express() ->

const mongoose = require('mongoose')
const connectionString = 'codigoDoMongoDbSemPassword'
mongoose.connect()


*/
