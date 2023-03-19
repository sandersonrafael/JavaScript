require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {app.emit('Inicializado')})
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const helmet = require('helmet')
const csrf = require('csurf')
const {middlewareG, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware')

app.use(helmet())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))

const sessionOptions = session({
    secret: 'sapd s 087213 njbasdabczxmjb523 3jhbhd 3jo4jb3',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // milésimos de segundos: milésimos * minutos * horas * horasNoDia * dias
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(csrf())
app.use(middlewareG)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.on('Inicializado', () => {
    app.listen(3000, () => { 
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

