// No javascript, muitas vezes não temos como controlar quando a função receberá
// os dados que necessita e quando finalizará sua execução devido latência, tempo de resposta
// de servidor e etc. Como exemplo, não é possível prever a ordem que as funções a seguir serão executadas:

// Nesta execução 
function rand() {
    return Math.round(Math.random() * 2000 + 1000) // aciona de 1 a 3 segundos
}
/* 
function f1() {
    setTimeout(function() {
        console.log('f1')
    }, rand())
}
function f2() {
    setTimeout(function() {
        console.log('f2')
    }, rand())
}
function f3() {
    setTimeout(function() {
        console.log('f3')
    }, rand())
}
f1()
f2()
f3()
console.log('Olá mundo!')
setTimeout(() => console.log(), 3001) */

// Caso eu deseje executar na sequência, como devo fazer?
// Através das callbacks: o parâmetro não precisa se chamar callback

function funcao1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
}
function funcao2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function funcao3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}
funcao1(() => {
    funcao2(() => {
        funcao3(() => {
            console.log('Olá mundo!')
        })
    })
})
funcao1(function() {
    funcao2(function() {
        funcao3(function() {
            console.log('Olá mundo!')
        })
    })
})

// Maneira mais resumida com arrow function de expressão única, sem chaves {}
// Ignorar o setTimeout(). Usado para não executar ao mesmo tempo do anterior
setTimeout(() => {
    funcao1(() => funcao2(() => funcao3(() => console.log('Olá mundo!'))))
}, 9001)