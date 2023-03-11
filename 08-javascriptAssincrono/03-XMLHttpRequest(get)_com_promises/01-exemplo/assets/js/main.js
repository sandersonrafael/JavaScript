// mais didático, não muito usual
// fazer a versão com fetch + async await depois


const request = obj => {
    const xhr = new XMLHttpRequest()
    // xhr.open('GET', 'U', true) -> get representa buscar algum conteúdo
    xhr.open(obj.method, obj.url, true) // assíncrono usa-se true e síncrono usa-se false
    xhr.send() // para caso seja um formulário, como não estamos usando, pode ficar em branco ou null
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) { // consultar status em https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', evento => {
    const elemento = evento.target
    const tag = elemento.tagName.toLowerCase()

    if (tag === 'a') {
        evento.preventDefault()
        carregaPagina(elemento)
    }
})

function carregaPagina(elemento) {
    const href = elemento.getAttribute('href')
    console.log(href)

    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response)
        },
        error(errorText) {
            console.log(errorText)
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}