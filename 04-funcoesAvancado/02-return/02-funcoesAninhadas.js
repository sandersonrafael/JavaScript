// Acessando função dentro de função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

// Maneira 1 (direto e simples)
console.log(falaFrase('Olá')('Mundo!'))

// Maneira 2 -> através de variáveis
const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)