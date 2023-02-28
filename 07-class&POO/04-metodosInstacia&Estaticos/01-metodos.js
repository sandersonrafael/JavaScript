// Métodos estáticos -> podem ser acessados sem utilizar a palavra reservada "new"
// São como funções dentro da classe

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // Método de instância -> precisa ser chamado por uma instância (objeto criado), não pela classe
    aumentarVolume() {
        this.volume += 2
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2
    }

    // static metodo() {} -> método estático -> não pode ser acessado por uma das instâncias, somente pela própria classe "ControleRemoto"
    static trocaPilha() {
        console.log('> Método estático chamado <')
    }
}

// instância 1 = controle1
const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume(); controle1.aumentarVolume(); controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha()

// um exemplo similar é o Math. Ele é uma "class" e pode chamar métodos estáticos, como a seguir:
console.log(Math.random())