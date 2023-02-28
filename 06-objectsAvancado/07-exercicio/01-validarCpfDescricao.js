// O CPF segue a seguinte lógica:
/* 
Os 9 primeiros dígitos resultam nos dois últimos

Para se obter, fazemos:
xxx.xxx.xxx-zz

10x 9x 8x 7x 6x 5x 4x 3x 2x
  x  x  x  x  x  x  x  x  x
  y  y  y  y  y  y  y  y  y -> somatório(y1)

  11 - (resto de (somatório y1 / 11)) = 10º dígito; e se o resultado for 10 ou mais, o 10º dígito é 0

Agora, com o novo dígito, repete o processo, mas começando por 11

11x 10x 9x 8x 7x 6x 5x 4x 3x 2x
  x  x  x  x  x  x  x  x  x  z   
  y  y  y  y  y  y  y  y  y  y  -> somatório(y2)

  11 - (resto de (somatório y2 / 11)) = 11º dígito; e se o resultado for 10 ou mais, o 11º dígito é 0

// CPF1: 705.484.450-52; CPF2: 070.987.720-03
*/

// Caso precise transformar o cpf number em string com . e -
/* function formataCPF(cpf) {
    cpf = cpf.toString()
    let cpfFormatado = ''
    for (let i in cpf) {
        if (Number(i) % 9 === 0 && i !== '0') {
            cpfFormatado += '-'
        } else if (Number(i) % 3 === 0 && i !== '0') {
            cpfFormatado += '.'
        }
        cpfFormatado += cpf[i]
        console.log(typeof i)
    }
    return cpfFormatado
}
console.log(formataCPF(70548445052)) */

// do professor
let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))