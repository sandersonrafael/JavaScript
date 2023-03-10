function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor Incorreto')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Último valor'
]

// Promise.all -> retorna o array com todas as promises, apenas depois de resolver todas
// Se algum dos valores informados cair no erro, a Pormise.all não retorna o array, apenas o erro
Promise.all(promises).then(valor => {
    console.log(valor)
}).catch(err => {
    console.log(err)
})


// Promise.race -> a primeira que resolver, é o valor retornado

const promises2 = [
    esperaAi('Promise 2.1', 3000),
    esperaAi('Promise 2.2', 500),
    esperaAi('Promise 2.3', 1000)
]

Promise.race(promises2).then(valor => {
    console.log(valor)
}).catch(err => {
    console.log(err)
})


// Promise.resolve -> resolve diretamente a promessa, indo direto ao then()

function baixaPagina() {
    const emCache = false; // se for true, já resolve 'Página em cache'
    // se for false, resolve a função esperaAi()
    if (emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Página baixada', 3000)
    }
}

baixaPagina().then(dadosPagina => console.log(dadosPagina)).catch(err => console.log(err))

// Promise.reject -> rejeita diretamente a promessa, indo direto ao reject()