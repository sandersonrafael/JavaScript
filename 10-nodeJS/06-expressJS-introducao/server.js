const express = require('express')
const app = express()

//          CRIAR      LER     ATUALIZAR   APAGAR
// CRUD ->  CREATE ,   READ ,  UPDATE ,    DELETE
// VERBOS-> POST       GET     PUT         DELETE

// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página sobre
// http://meusite.com/contato <- GET -> Entregue a página contato

// ex get -> 1º parâmetro é a rota, no caso é / que representa a home
// 2º parâmetro é função, que tem como parâmetros a requisição e a resposta

// req é o que o usuário está pedindo | res é o que será mandado para o servidor
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulário recebido!')
})


// criando outra rota
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato!')
})



// usando a porta 3000 -> o que o express "ouvir" e receber na porta 3000, irá executar
// importante botar portas na casa 3000, pois não possuem funções primárias rodando e não costuma apresentar erros
// enquando não finalizar a execução do code runner, continuará ativo
// para matar o comando se persistir aberto, abrir terminal do linux e usar:
// "lsof -i :numeroDaPorta" para listar as execuções na porta informada
// depois pegar o Process ID e usar o comando: "kill PID"
app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
// o nodemon serve para ficar reiniciando o servidor automaticamente a cada atualização
