// req.params é utilizado para obter parâmetros dinâmicos de uma URL, como um ID de usuário, que cada um tem um único
// se uma solicitação GET for feita para a rota "/usuarios/123", o Express.js extrairá o valor "123" do parâmetro "id" e armazenará na propriedade "req.params.id"

// req.query é usado para obter parâmetros de consulta, como os que vêm após o "?". Ex:
// "/usuarios?nome=João&idade=30", os parâmetros de consulta são "nome=João" e "idade=30".
// o express.js armazenará estes parâmetros na req.query, acessíveis por meio das suas chaves

// req.body é usado para se obter dados de uma req do tipo HTTP POST ou PUT
// Quando um cliente faz uma solicitação HTTP POST ou PUT, ele envia dados em 
// formato JSON ou formulário no corpo da solicitação. O "req.body" é usado para obter esses dados do corpo da solicitação e usá-los no servidor.


/* APLICANDO */

/* req.params 

para usar o req.params, é necessário adicionar no caminho /:nomeDoParametro, como no exemplo do server <-
ex: http://localhost:3000/123 -> app.get('/idUsuario', ...{}) -> 123 seria o 
id do parâmetro e será salvo no req.params.idUsuario
? -> botando interrogação após o nome do parâmetro, indica que ele pode ou não ser recebido
Retorna um objeto do tipo json





*/