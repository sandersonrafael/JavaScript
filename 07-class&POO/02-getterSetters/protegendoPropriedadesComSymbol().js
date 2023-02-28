// para criar uma chave privada dentro da class, usa-se o Symbol(), que faz com que o termo perca a referência, pois o Symbol nunca é o mesmo, gerando sempre um ID aleatório
console.log(Symbol() === Symbol(), '<- resultará false, devido ao explicado acima')

// para proteger essa chave, usa-se:
const _velocidade = Symbol('velocidade')

// será criado o get e set de velocidade() para ser acessado como um atributo
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0  // substitui-se onde tem .velocidade por [_velocidade]
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor < 0 || valor > 100) return
        this[_velocidade] = valor
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade] ++
    }

    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('fusca')

for (let i = 0; i <= 200; i++) {
    c1.acelerar()
}
c1.velocidade = 150 // o valor informado não foi alterado, pois agora .velocidade é um método acessado como propriedade e não propriedade
console.log(c1, c1.velocidade)

// para que o usuário possa informar uma velocidade dentro do permitido (de 0 a 100), usaremos o método set para validar ^

//testando os valores
c1.velocidade = 101; console.log(`Velocidade: ${c1.velocidade}`, '<- não foi alterada')
c1.velocidade = 87; console.log(`Velocidade: ${c1.velocidade}`, '<-foi alterada, pois está dentro do intervalo permitido')
