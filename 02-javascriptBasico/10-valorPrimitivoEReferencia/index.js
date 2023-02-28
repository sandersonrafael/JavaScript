/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -> são copiados

Referência (mutável) - array, object, function -> passados por referência
*/
let nome = 'Luiz'
nome[0] = 'R' // não vai alterar porque a string em si é imutável, embora sua variável possa variar
console.log(nome[0], nome, '<--- Não alterou o L para R')

// Diferença primitivo e referência
let a = 'A'
let b = a
a = 'Novo A'
console.log(a, b, '<-- O valor de "a" alterour, mas "b" não')

// No caso de referência, eles apontam para o mesmo lugar da memória, então:
let c = [1, 2, 3]
let d = c
c.push(4)
console.log(c, d) // os dois foram modificados ao alterar c

// COPIAR ARRAY EM VEZ DE REFERENCIAR: podemos usar n = [...var], ex:
let i = [1, 5, 3]
let k = [...i] // também funciona para objects: seria {...i} em vez de [...i]
i.push(4)
console.log(i, '<!=>', k)