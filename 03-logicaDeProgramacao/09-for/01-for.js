// Funciona para Arrays e Strings

for (let i = 1; i <=5; i++) {
    console.log(`${i}ª linha`)
}
// pode ser negativo também

for (let i = -1; i >= - 10; i--) {
    console.log(`Gastou ${i}, agora deve no total: R$ ${i},00`)
} console.log()

// percorrer array clássico

const frutas = ['Maçã', 'Pêra', 'Banana', 'Goiaba']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`)
}