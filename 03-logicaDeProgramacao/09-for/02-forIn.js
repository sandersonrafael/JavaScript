// pode ser usado para array, object ou strings
// lê índices ou chaves dos objetos


// Array
const frutas = ['Pêra', 'Maçã', 'Uva']
for (let i in frutas) {
    console.log(`${Number(i) + 1}.`, frutas[i])
}

// Object -> para acessar dinamicamente, usa-se a notação objeto[chave], similar ao vetor. Se o contador fosse i, seria: objeto[i] igualmente
// os objetos podem ser acessados também do modo: objeto['chave']
const pessoa = {
    nome: 'Sanderson Rafael',
    sobrenome: 'da Cunha Ferreira',
    idade: 25
}
for (let i in pessoa) {
    console.log(`${i}: `, pessoa[i])
}

// String
const palavra = 'Paralelepípedo'
console.log(palavra.length)

for (let l in palavra) {
    console.log(palavra[l])
}



// Divagando -> adiciona à variável resultado cada letra da string e no final fala ela quando o contador for igual ao tamanho da string
let c = 0
let resultado = ''
for (let l in palavra) {
    c++
    resultado += palavra[l]
    if (c == palavra.length) {
        console.log(resultado)
    } 
}