// new Object -> sempre que se cria um objeto literal, o próprio JS chama como new Object
// Função construtora tem um Object.prototype atrelado automaticamente
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype -> implícito
}
console.log(objA.__proto__ === Object.prototype)

const objB = {
    chaveB: 'B'
    // Se eu quiser tornar __proto__: objA, é possível?
}

// Object.setPrototypeOf(objetoQueObtemPrototipo, objetoQueSeraPrototipo)
Object.setPrototypeOf(objB, objA)

console.log(objB.chaveA) // objB conseguiu acessar a chaveA apesar de não ter, pois buscou no seu novo protótipo, agora o objA
const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)
console.log(objC.chaveB)
console.dir(objC)