const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e){ // mesmo que "onclick", mas para submit e bem resumido
    e.preventDefault()
})

function serResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${msg}`
}