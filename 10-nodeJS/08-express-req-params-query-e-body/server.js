const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});


// testando o req.params
app.get("/testes/:idUsuario?/:userName?", (req, res) => {
    console.log(req.params)
    const p = req.params
    res.send(p/* `Usuário: ${p.userName}, ID: ${p.idUsuario}` */) // vai exibir o que for digitado após essa barra de /testes/
})

app.post('/', (req, res) => {
    res.send('Formulário recebido. Obrigado!')
})

app.listen(3000, () => { 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

