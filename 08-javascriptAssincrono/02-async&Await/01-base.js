function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Erro! Finalizando a execução do programa...')
                return
            }

            resolve(msg)
            return
        }, tempo)
    })
}

// método async e await
// usa-se o try catch para capturar os erros de execução

// ao definir a função utilizando o nome async antes, libera-se a função
// await, que garante que as chamadas vão ser executadas em sequência,
// apenas após a anterior ter sua execução finalizada

async function executa() {
    try {
        const fase1 = await esperAi('Fase 1', rand())
        console.log(fase1)

        const fase2 = await esperAi('Fase 2', rand())
        console.log(fase2)

        const fase3 = await esperAi(3, rand())
        console.log(fase3)
        console.log('Terminamos na fase:', fase3)
    } catch (err) {
        console.log(err)
    }
}
executa()

// 3 estados das promises:

// pending: se na primeira sentença após o try, for usado:
// const fase1 = esperAi('Fase 1', rand())  -> sem await
// o console.log(fase1) vai informar: Promise { <pending> }, pois não foi resolvido ainda

// fullfilled -> resolvida

// rejected -> quando resulta erro e é chamada a função reject()