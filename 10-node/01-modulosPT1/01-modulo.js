// const nome = 'Sanderson'
// const sobrenome = 'Rafael'
// const falaNome = () => `${nome} ${sobrenome}`
// // Maneiras de exportar variáveis e functions:
// // 1:
// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome
// // 2:
// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// // 3:
// this.cidade = 'Natal'
// // console.log(module.exports)

// exportando classes
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa