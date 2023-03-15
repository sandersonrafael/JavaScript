// os dados salvos no app.get não ficam disponíveis ao usuário final, a menos que
// o desenvolvedor exiba. O console.log(), só exibe no console do servidor, não do usuário

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

/* req.query 

não precisa identificar o caminho no app.get('/caminho', (req, res) => {})
precisa estar contido na url o caminho do tipo: 
/?nome=talCoisa&idade=talIdade&altura=talAltura
o próprio req.query já pega os dados da url e salva como json
não é um método muito moderno. É mais utilizado para marketing e projetos simples
*/

/* req.body

utilizado no app.post('/caminho')
para utilizar, é necessário usar abaixo de const app = express(), o comando:
app.use(express.urlencoded({extended: true})) -> a partir disto, será salvo o json
após o envio do formulário dentro de um app.post()
é possível acessar estes dados pela notação ponto, como: 
req.body.nome (chave/key) -> vai retornar o que foi informado (valor/value)
*/