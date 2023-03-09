function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Valor Incorreto')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

// Promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Último valor'
]



// Promise.race




// Promise.resolve




// Promise.reject