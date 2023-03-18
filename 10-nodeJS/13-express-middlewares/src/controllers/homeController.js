exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente.')
    res.render('index.ejs')
    console.log(`'Pagina inicial' Verificar req.session: ${req.session.nome} ${req.session.sobrenome}`)
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
}