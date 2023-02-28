// Deixar fundo dos parágrafos iguais ao fundo do body

const div = document.querySelector('.div')
const paragrafos = document.querySelectorAll('p') // retorna uma NodeList que é similar a um array, podendo ser usado o laço for e suas variações Este caso, a NodeList é: [p, p, p, p]

const estilosBody = getComputedStyle(document.body) // pega todos estilos computados do css do body
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF'
}