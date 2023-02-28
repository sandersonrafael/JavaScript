const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let numero of numeros) {
    console.log(numero)
}; console.log()

// se eu não quiser executar o número 2, posso usar o continue para pular:

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número ', numero)
        continue // pula para a próxima iteração
    }
    if (numero === 6) {
        console.log(`Encontrei o ${numero}, então para aqui com o break`)
        break // finaliza as iterações do laço
    }
    console.log(numero)
}