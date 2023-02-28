// Valor por referência -> a constante novoNomes está apontando para o mesmo
// espaço que "nomes" na memória. Se um altera, o outro também
const nomes = ['Eduardo', 'Maria', 'Joana']
const novoNomes = nomes
nomes.pop(2)
console.log(nomes)
console.log(novoNomes)

// Spread Operator -> cria um novo array que não está relacionado com o anterior, "espalhando" os valores para ambos, em vez de apontar para o mesmo local
const maisNomes = [...nomes]
nomes.push('Pedro')
console.log(nomes)
console.log(maisNomes, '<-- não teve o valor "Pedro" adicionado')
console.log()

// separa cada termo do array e adiciona cada um individualmente
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
console.log(a3, '<- com spread')

// mais sobre spread e como se comporta
console.log(...a3, '<- livre (numbers)')
console.log([...a3], '<- com colchetes (array) / spread interno')
console.log(...[a3], '<- com colchetes (array) / spread externo')
console.log({...a3}, '<- com chaves (object)')

