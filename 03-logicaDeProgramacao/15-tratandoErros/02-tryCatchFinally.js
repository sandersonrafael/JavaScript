// Finally

try {
    // É executado quando não há erros
} catch (e) {
    // É executado quando há erros
} finally {
    // É executado sempre
}

// É útil para casos onde precisa ser finalizada alguma tratativa, independente de apresentar erro ou não. Ex:

try {
    console.log('Abrindo meu arquivo')
    console.log('Arquivo apresentou erro')
    console.log(e) // como apresentou erro, vai direto ao catch, pulando o fechamento do arquivo
    console.log('Arquivo fechado')
} catch (erro) {
    console.log('Tratando erro')
} finally {
    console.log('Fechando arquivo') // sempre vai fechar o arquivo, independente se apresentou erro ou não
    console.log()
}

// Ex:

function retornaHora(data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    } else {
        console.log(new Date)
    }
}
retornaHora(new Date)
retornaHora()