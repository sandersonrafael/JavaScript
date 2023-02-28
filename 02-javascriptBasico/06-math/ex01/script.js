let numero = prompt('Digite um número:')
numero = Number(transformar(numero))

const numeroTitulo = document.getElementById("numero-titulo")
numeroTitulo.innerHTML = numero.toString().replace('.',',')

const numeroRaiz = document.getElementById('raiz')
numeroRaiz.innerHTML = `A raiz do número ${numero.toFixed(2).toString().replace('.',',')} é: ` + (numero**(1/2)).toFixed(2).toString().replace('.',',')

const numeroInteiro = document.getElementById('inteiro')
numeroInteiro.innerHTML = Number.isInteger(numero) ? `O número ${numero.toFixed(2).toString().replace('.',',')} é inteiro.` : `O número ${numero.toFixed(2).toString().replace('.',',')} não é inteiro.`

const numeroNaN = document.getElementById('NaN')
numeroNaN.innerHTML = Number.isNaN(numero) ? `O valor ${numero.toFixed(2).toString().replace('.',',')} não é um número.` : `O valor ${numero.toFixed(2).toString().replace('.',',')} é um número.`

const numeroArredondadoBaixo = document.getElementById('arredondadoBaixo')
numeroArredondadoBaixo.innerHTML = `Arredondando ${numero.toFixed(2).toString().replace('.',',')} para baixo, temos: ${Math.floor(numero)}`

const numeroArredondadoCima = document.getElementById('arredondadoCima')
numeroArredondadoCima.innerHTML = `Arredondando ${numero.toFixed(2).toString().replace('.',',')} para cima, temos: ${Math.ceil(numero)}`

const numeroDuasCasas = document.getElementById('duasCasas')
numeroDuasCasas.innerHTML = `O número ${numero} com duas casas decimais, fica: ${numero.toFixed(2).toString().replace('.',',')}`



// raiz quadrada
// se é inteiro
// se é NaN
// Arredondado pra baixo
// Arredondado pra cima
// duas casas decimais



function transformar (numero) {
    if (numero.indexOf(',') != -1) { 
        return numero.replace(',', '.')
    } else { 
    return numero
    }
}
