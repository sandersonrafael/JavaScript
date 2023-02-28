// Criar tags com os determinados textos usando dos conceitos vistos em desestruturação e for

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
]
const espaco = document.querySelector('.container')     // seleciona section
for (let i = 0; i < 4; i++) {
    const termo = elementos[i]                          // obtem o objeto presente no índice [i] e associa à constante termo
    const {tag, texto} = termo                          // obtem as variáveis tag e texto dos objetos obtidos acima
    espaco.innerHTML += `<${tag}>${texto}</${tag}>`     // adiciona no documento as tags com os textos
}
