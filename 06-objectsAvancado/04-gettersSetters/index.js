// get set -> faz com que um método de um objeto simule uma propriedade, podendo chamar sem precisar do ()
// serve em adicional para validar/editar/rejeitar valor fornecido
// é também uma maneira de proteger a propriedade

// ex1: factory function
function criaDiasRestantes(dias) {
    return {
        get dias() {    // retorna o valor para o método dias() que será usado como propriedade em vez de método
            return dias
        },
        set dias(valor) {   // faz validações e altera o valor do método dias() se necessário, conforme código fornecido
            if (typeof valor !== 'number') {
                console.log('valor informado é inválido e não será alterado')
                return // ^valor informado não sendo número, não altera e informa erro
            }
            console.log('Agora foi informado número. Alterando...')
            dias = valor // valor informado sendo número, altera os dias
        }
    }
}
const dezDias = criaDiasRestantes(10)
console.log(dezDias)
console.log(dezDias.dias)
dezDias.dias = '11'
console.log(dezDias.dias)
dezDias.dias = 11
console.log(dezDias.dias)

// ex2: constructor function
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        configurable: true,
        enumerable: true,
        get: function() { // apenas retorna o valor
            return estoque
        },
        set: function(valor) { // valida o valor
            if (typeof valor !== 'number') {
                console.log('Valor incorreto')
                return
            }
            estoque = valor
        }
        
    })
}
const p1 = new Produto('Camiseta', 20, 3)
console.log(p1, 'Antigo estoque: ', p1.estoque)
p1.estoque = 500
console.log('Novo estoque :', p1.estoque)
