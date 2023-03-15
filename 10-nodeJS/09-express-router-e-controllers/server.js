const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true })) // agora o req.body salvará json

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});


// testando o req.params e req.query
app.get("/testes/:idUsuario?/:userName?", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`${req.params.idUsuario + req.params.userName} ${req.query.genero + req.query.idade}`)
})

app.post('/', (req, res) => {
    console.log(req.body) // exibe um json com os dados do formulário
    res.send(`Obrigado, ${req.body.nome}!`) // exibe o nome que foi obtido no formulário
})

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

