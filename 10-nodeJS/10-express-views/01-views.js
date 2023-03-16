/* Views

criar pasta views dentro de uma src
os views são responsáveis por exibir códigos em html dentro do projeto, além de 
serem respnsáveis por interligar o javascript e o "html" dinamicamente.

necessário adicionar no server.js:


app.set('views', 'caminho') -> caminho neste modelo, é: './src/views'
app.set('view engine', 'ejs') -> mistura o javascript com "html"

instalar o ejs utilizando no terminal o comando:
npm i ejs

cria dentro da pasta views um arquivo index.ejs
esse html possui algumas sintaxes diferentes do html comum

no homeController, em vez de usar o res.send dentro do exports.paginaInicial, usa-se
res.render('nomeDoArquivoEjs')


*/