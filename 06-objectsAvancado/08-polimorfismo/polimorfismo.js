// Definição de polimorfismo: um mesmo método se comporta de maneira diferente
// dependendo de quem o chama. Pois ele pode ser utilizado por herança ou direto
// no objeto que o chama

// fazer um método sacar se comportar diferente dependendo do tipo de conta
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Salvo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência / Conta: ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}
// const conta1 = new Conta(11, 22, 10)
// console.log(conta1)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(30)

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo) // herda do objeto criador "Conta()"
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Salvo insuficiente: R$ ${this.saldo.toFixed(2)}`)
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const contaCorrente = new ContaCorrente(11, 22, 0, 100)
contaCorrente.depositar(10)
contaCorrente.sacar(110); console.log()

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo) // herda do objeto criador "Conta()"
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaPoupanca = new ContaPoupanca(12, 33, 0)
contaPoupanca.depositar(10)
contaPoupanca.sacar(110)
contaPoupanca.sacar(1)