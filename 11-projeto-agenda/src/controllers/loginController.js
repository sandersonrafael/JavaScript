const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}
exports.register = async (req, res) => {
    const login = new Login(req.body)
    try {
        await login.register()

        if (login.errors.length > 0) {
            req.flash('erros', login.errors)
            req.session.save(function() {
                return res.redirect('/login/index')
            })
            return
        }

        req.flash('success', 'Usuário criado com sucesso')
        req.session.save(function() {
            return res.redirect('/login/index')
        })
        return

    } catch(err) {
        console.log(err)
        return res.render('404')
    }
}