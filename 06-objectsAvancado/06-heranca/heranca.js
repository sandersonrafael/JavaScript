// Produto
// Camiseta possui característica cor ; caneca possui característica material
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)     // essa função chamará a outra e assimilará os dados
    this.cor = cor // a camiseta tem uma propriedade a mais que Produto()
}
Camiseta.prototype = Object.create(Produto.prototype) // Camiseta terá o mesmo prototype que Produto
Camiseta.prototype.constructor = Camiseta // a função constructor de Camiseta não será Produto(), se tornará Camiseta() novamente. É possível ver no console do navegador


const camiseta = new Camiseta('Regata', 39.99, 'Azul')
camiseta.aumento(10)
console.log(camiseta)

// fazendo para caneca agora
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return 
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Média', 19.99, 'Porcelana', 10)
caneca.desconto(1.99)
console.log(caneca)
console.log(caneca.estoque)
caneca.estoque = '9'
console.log(caneca.estoque, '<- não alterou pois foi usado string')
caneca.estoque = 9
console.log(caneca.estoque, 'agora alterou')