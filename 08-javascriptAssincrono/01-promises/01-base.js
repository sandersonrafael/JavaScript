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
// .then() -> quando resolve(), realizará outra função especificada
// .catch() -> quando reject(), obtem o erro e realiza a função especificada para o erro

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg)
            resolve()
        }, tempo)
    })
}

esperaAi('Frase 1', aleatorio(0, 2)) 