function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(desconto) {
    this.preco = (this.preco - (this.preco * (desconto / 100))).toFixed(2)
}

const produto1 = new Produto('Camiseta', 39.99)
produto1.desconto(100)
console.log(produto1, '<- validou o desconto de 100%')

// para aproveitar o método em um novo produto criado direto, sem constructor
// Literal:
const produto2 = {
    nome: 'Lápis',
    preco: 2.50
}

// agora o Produto.prototype é também protótipo do produto literal criado, o produto2
Object.setPrototypeOf(produto2, Produto.prototype)

produto2.desconto(10)
console.log(produto2, '<- desconto foi aplicado, porque agora o protótipo de Produto é o mesmo do produto2 e está com referência "Produto {}" ')

// criando um novo objeto já setando quem será seu protótipo:
// se quiser adicionar já com as chaves e valores, é necessário informar também
// as propriedades, como segue:
const produto3 = Object.create(Produto.prototype,{ 
    nome: { 
        value: 'Caderno do Batman', 
        enumerable: true, 
        configurable: true,
        writable: true
    }, 
    preco: {
        value: 19.90, 
        enumerable: true,
        configurable: true,
        writable: true
    } 
})
produto3.desconto(5)
console.log(produto3)

// também pode ser criado mais simplesmente, como:
const produto4 = Object.create(Produto.prototype)
produto4.nome = 'Lapizeira'
produto4.preco = 5
produto4.desconto(10)
console.log(produto4)
