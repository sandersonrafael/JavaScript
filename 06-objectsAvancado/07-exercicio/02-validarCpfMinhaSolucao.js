// Validador de CPF
// Validar CPFs: 705.484.450-52 e 070.987.720-03

function validarCpf(cpf) {
    cpf = String(cpf).replaceAll('.', '').replace('-', '')
    let cpfCorreto = cpf.slice(0,-2)
    let mult = 10
    let somatorio = 0
    let digito10
    let digito11
    for (let i in cpfCorreto) {
        somatorio += Number(cpfCorreto[i]) * mult
        mult--
    }
    digito10 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
    cpfCorreto += digito10
    mult = 11
    somatorio = 0
    for (let i in cpfCorreto) {
        somatorio += Number(cpfCorreto[i]) * mult
        mult--
    }
    digito11 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
    cpfCorreto += digito11
    return cpf === cpfCorreto ? 'CPF válido!' : 'CPF inválido!'
}

console.log(validarCpf('705.484.450-52'))
console.log(validarCpf('070.987.720-03'))

// Adicional -> gerador de CPF

function gerarCpfValido() {
    novoCpf = String(Math.round(Math.random() * (999999999 - 100000000) + 100000000 ))
    let mult = 10
    let somatorio = 0
    let digito10
    let digito11
    
    for (let i in novoCpf) {
        somatorio += mult * Number(novoCpf[i])
        mult--
    }

    digito10 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
    novoCpf += digito10
    mult = 11
    somatorio = 0
    
    for (let i in novoCpf) {
        somatorio += mult * Number(novoCpf[i])
        mult--
    }

    digito11 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
    novoCpf += digito11

    let cpfFormatado = ''

    for (let i in novoCpf) {
        if (i % 9 == 0 && i !== '0') {
            cpfFormatado += '-'
        } else if ( i % 3 == 0 && i !== '0') {
            cpfFormatado += '.'
        }
        cpfFormatado += novoCpf[i]
    }
    return cpfFormatado
}

let cpfGerado = gerarCpfValido()
console.log(cpfGerado, '->', validarCpf(cpfGerado))