/* Session e Flash
utilizar comando terminal para instalar ambos

npm install express-session connect-mongo connect-flash

o session salva dados temporários no navegador do cliente, para ajudar a identificar nos futuros logins e sessões
o flash serve para dar mensagens temporárias ao usuário, como um aviso de senha incorreta,
que depois de atualizar a página e etc, não vai continuar aparecendo lá

criar no server.js
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

após isto, acima dos views e do express static, configurar: 

const sessionOptions = session({
    secret: 'sapd s 087213 njbasdabczxmjb523 3jhbhd 3jo4jb3',
    store: new MongoStore({ mongooseConnection: mongooseConnection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // milésimos de segundos: milésimos * minutos * horas * horasNoDia * dias
    }
})
app.use(sessionOptions)
app.use(flash())

*/