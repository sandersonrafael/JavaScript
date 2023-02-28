function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado') // seleciona a div após formulário
    const pessoas = []
    let contador = 0

    function recebeEventoForm (evento) {
        evento.preventDefault()             // faz com que não atualize a página ao enviar
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        pessoas.push({nome:nome.value, sobrenome:sobrenome.value, peso:peso.value, altura:altura.value})
        console.log(pessoas)
        resultado.innerHTML += `<p>Pessoa ${contador + 1}: ${pessoas[contador].nome} ${pessoas[contador].sobrenome} tem ${pessoas[contador].peso}kg e ${pessoas[contador].altura / 100}m de altura</p>`
        contador++
    }
    form.addEventListener('submit', recebeEventoForm) // ao receber submit, aciona a função "recebeEventoForm"
}
meuEscopo()