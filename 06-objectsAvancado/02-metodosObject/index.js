const pessoa = {
    nome: 'Rafael',
    sobrenome: "Ferreira"
}
pessoa.idade = 26
console.log(pessoa)

// usar valores de propriedades específicas em novos objetos
console.log({ nome: pessoa.nome, sobrenome: 'Oliveira'})

// Object.freeze(objeto) -> o objeto não pode ser alterado, nem seus atributos, nem métodos
Object.freeze(pessoa)
pessoa.idade = 25
console.log(pessoa, '<- vai mostrar 26, ainda')

// delete -> apaga um dos termos ou todo o object
delete pessoa.idade
console.log(pessoa, '<- ainda vai mostrar idade devido o Object.freeze()')

// Object.keys(objeto) -> exibe somente as chaves do obj
console.log(Object.keys(pessoa))

// Object.values(objeto)
console.log(Object.values(pessoa))

// Object.entries(objeto) -> retorna múltiplos arrays com os pares [[chave1, valor1], [chave2, valor2], ...[chaveN, valorN]]
console.log(Object.entries(pessoa))

// for (let chave in objeto) {} 
for (let chave in pessoa) {
    console.log(`${chave} é: ${pessoa[chave]}`)
}

// spread operator para object: {...objeto} -> cria um novo objeto com os mesmos atributos, mas apontando para outro local da memória, não estando relacionados
const outraPessoa = { ...pessoa, altura: 187 } // key:value altura:187 adicionados
outraPessoa.nome = 'João'
console.log(outraPessoa, ' <-comparando valores: agora são diferentes->', pessoa)

// Object.assign({objetoInicial (pode ser vazio)}, objetoAAssimilar, {maisPropriedades (opcional)}) -> similar ao spread, copia objeto sem apontar para o mesmo local na memória
const terceiraPessoa = Object.assign({}, pessoa, {nome: 'Pedro', altura: 180}) // nome foi substituído por 'Pedro'
console.log(terceiraPessoa)

// Object.defineProperties() e Object.defineProperty() -> estão na pasta seguinte

// Object.getOwnPropertyDescriptor(objeto, 'propriedade') -> exibe todas as propriedades do object
console.log(Object.getOwnPropertyDescriptor(terceiraPessoa, 'nome'))

// Object.create(prototipoDoObjeto, {chaves: { propriedades } } ) -> cria um novo objeto e define quem será seu protótipo
