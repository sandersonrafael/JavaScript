const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div') // a constante div cria uma nova div

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i] // faz desestruturação doos objetos de cada índice
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto
    div.appendChild(tagCriada)
}
container.appendChild(div)