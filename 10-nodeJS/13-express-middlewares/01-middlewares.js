/* middlewares

Para utilizar os middlewares, precisamos definir rotas intermediárias e chamar a rota seguinte
como: app.get('/caminho', (req, res, next) => {
    ####CÓDIGO####
    next() -> fará executar a próxima função informada. 
})

O formato é o seguinte:
app.funcaoSolicitada('/caminho', middleware1, middleware2, etc..., funcaoFinal)

os middlewares precisam sempre ter o terceiro parâmetro (next) e chamá-lo na função
next() <-

É vastamente utilizado para sessões. Salvar informações na sessão do usuário
Podem ser salvadas nos cookies (lado do cliente) e sessões (lado do servidor)
usa-se
req.session = { nome: 'Taltal', sobrenome: 'TaltalTal}


para passar todas requisições por algum middleware específico chama o middleware:
app.use(middlewareGlobal) -> acima do app.use(routes), ou é chamado depois de exibir tudo e não aparece
*/
