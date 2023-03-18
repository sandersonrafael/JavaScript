require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true})
    .then(() => {app.emit('Inicializado')})
    .catch(e => console.log(e))

const routes = require('./routes')
const middlewareG = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended:true}))

app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(middlewareG)
app.use(routes)

app.on('Inicializado', () => {
    app.listen(3000, () => { 
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

