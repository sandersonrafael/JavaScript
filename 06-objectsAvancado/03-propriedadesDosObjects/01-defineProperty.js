/* 
Object.defineProperty(objeto, 'chave', {    <- a chave precisa estar com aspas
    enumerable: true ou false, -> aparece quando o objeto for exibido?
    value: valorDaChave, -> define o valor que a chave informada receberá
    writable: true ou false, -> o valor da chave pode ser alterado?
    configurable: true ou false -> Pode apagar esta chave? / essas propriedades desta chave podem ser alteradas depois?
}) 
*/

// fazer com que a propriedade estoque não seja exibida
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    })
}


const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 1000
console.log(p1, '<- estoque não foi alterado')