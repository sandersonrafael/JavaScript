// as reticências podem ser rest e spread: (...termo) (obter resto), (...termo) será spread (espalhar / distribuir)
//            i: 0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // se for const, as atribuições futuras precisam ser const. Se for let, as próximas precisam ser let
const[primeiro, segundo, terceiro, ...rest] = numeros // os 3 pontos indicam "rest", que significa demais termos. Ou seja, outro array com os termos restantes
console.log(primeiro, segundo, terceiro)
console.log(rest)

// Possiblidade 2: os espaços vazios pulam o termo
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [um, , tres, , cinto, , sete] = nums
console.log(um, tres, cinto)

// Array dentro de array
//                        0          1          2
//                     0  1  2    0  1  2    0  1  2
const arrayEmArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(arrayEmArray[1][2], '<----- índice 2 do primeiro array dentro do array')

// atribuição via desestruturação (destructuring)
// pegando o número seis e atribuindo à const sextoNumero
const [ ,[, ,sextoNumero]] = arrayEmArray // pulei o índice 0 para ir ao índice 1, dentro do índice 1 pulei o índice 0 e 1 para pegar o termo de índice 2 e associar à variável
console.log(sextoNumero)

// outro método é separar os vetores // também é possível setar valores padrões, caso não encontre os arrays
const [lista1, lista2, lista3, lista4 = [10, 11, 12]] = arrayEmArray
console.log(lista3[2], '<-- último termo do terceiro array interno')
console.log(lista4, '<---- valor padrão que foi atribuído')