const nome = 'Luiz'
const sobrenome = 'Miranda'

function soma(x, y) {
    return x + y
}

// método mais simples para exportar

// exportada as constantes
// posso exportar com outro nome de variável, usando o "as", como: export { nome as outroNome }
export { nome, sobrenome, soma }

// outro método de exportar
export const idade = 30

// com classes:
export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

// caso eu não queira que o arquivo seja exportado mesmo sendo chamado pelo import * as Modulo from './modulo1.js'
// basta não exportar de forma alguma. Assim, o termo só será acessível pelo módulo em si
const cpf = '000.000.000-00' // não foi exportado, então é uma variável privada

// posso também declarar uma função default. Qualquer coisa que importar deste arquivo, com nome qualquer, será por padrão a função "defaultada"
export default function subtrai(x, y) {
    return x - y
}

// se eu quiser declarar uma constante default, preciso declarar ela normalmente no código, como: const pessoa1 = "Felipe" ->
// export { pessoa1 as default }

// pode-se exportar uma arrow function anônima como padrão. ex:
// export default (a, b) => a + b