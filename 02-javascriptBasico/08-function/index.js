function saudacao (nome) {
    return `Bom dia ${nome}!` // assim que chegar no return, nada mais é executado
}
const variavel = saudacao('Luiz')
console.log(variavel)

function soma(x = 0, y = 0) {
    const resultado = x + y
    return resultado
}
console.log(soma(3, 1))

resultado = soma()
console.log(resultado)

const raiz = (n) => n ** (1/2)
console.log(raiz(9))