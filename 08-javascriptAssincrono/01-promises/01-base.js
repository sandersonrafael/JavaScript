// serve para trabalhar com requisições assíncronas sem que o código pause a execução
// até receber algum retorno

// simulando requisições assíncronas
function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
// function esperaAi(msg, tempo, callback) {
//     setTimeout(() => {
//         console.log(msg)
//         if (callback) callback()
//     }, tempo)
// }
// esperaAi('Olá 1', aleatorio(1, 3), () => {
//     esperaAi('Olá 2', aleatorio(1, 3), () => {
//         esperaAi('Olá 3', aleatorio(1, 3))
//     })
// })

// new Promise((resolve, reject) => { function }) -> realiza uma ação se resolver e outra ação se não resolver (reject)
// .then() -> quando resolve(), realizará outra função especificada -> uma função que só executa se a anterior for executada
// .catch() -> quando reject(), obtem o erro e realiza a função especificada para o erro

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor Incorreto') // vai direto para o catch, salvando o erro numa variável informada e acionando uma função determinada pelo usuário
        // É um uso interessante no reject criar um new Error para ser salvo na variável do catch, podendo ser salvo para posterior tratamento

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com Banco de Dados', aleatorio(1, 3))
    .then(resposta => { // chama o resolve da new Promise
        console.log(resposta)
        return esperaAi('Buscando dados da Base', aleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando os dados da Base', aleatorio(1, 3)) // acionará o catch se for informado algo diferente de string
    })
    .then(resposta => console.log(resposta))
    .then(() => console.log('Exibindo dados na tela'))
    .catch( err => console.log('Erro:', err)) // captura o erro para caso do reject ser executado
