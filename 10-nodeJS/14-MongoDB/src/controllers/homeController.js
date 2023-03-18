const HomeModel = require('../models/HomeModel')

// HomeModel.create({       // cria um documento na tabela com as características especificadas
//     titulo: 'Testando o find',
//     descricao: 'Descrição do teste'
// })

HomeModel.find() // localiza todos os dados da base de dados
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente.')
    res.render('index.ejs')
    console.log(`'Pagina inicial' Verificar req.session: ${req.session.nome} ${req.session.sobrenome}`)
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
}