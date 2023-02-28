const pessoas = [
    { id: 3, nome: 'Luiza' },
    { id: 2, nome: 'Marizete' },
    { id: 1, nome: 'Heronilda' }
]

const novasPessoas = {}
for (const { id, nome } of pessoas) {
    novasPessoas[id] = { id, nome }
}
console.log(novasPessoas)