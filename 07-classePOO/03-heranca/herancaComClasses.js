class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false // inicia desligado
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado.`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`)
            return
        }
        this.ligado = false
    }
}

// Criando nova classe que herda da classe "DispositivoEletronico"
// extends -> basta utilizar esta palavra reservada para definir a classe como filha da outra
// super() -> faz com que a nova classe herde os parametros da classe mãe
// ^ é obrigatório

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        // this.ligado não foi informado, mas já foi herdado do super()
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('iPhone', 'Rose', 'XR 128GB')
console.log(s1)

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }
    
    ligar() {
        console.log('Você alterou o método ligar, não puxando mais por herança para este objeto')
    }
}

const t1 = new Tablet('iPad', true)
console.log(t1.ligado, '<- tirou do parent')
t1.ligar()