// IMPORTANTE: As strings se comportam como arrays, inclusive nas funções e métodos

console.log('Testando \'a\' barra invertida')

// termos da string podem ser acessados como um array. Ex:
let  p = 'Paralelepípedo'
console.log(p[0], p[1], p[2], p[3])

//outra maneira é:
console.log(p.charAt(0), p.charAt(1), p.charAt(2), p.charAt(3))

// .concat()
p = p.concat(' é uma pedra')
console.log(p)

// tamanho da string/array
console.log(p.length, '<- possui 27 termos, pois conta a partir do 0')

// indexOf(); informa índice -1 se termo não existir. Posso botar também indexOf('termo', indiceInicial)
console.log(`o termo pípedo começa no índice: ${p.indexOf('pípedo')}`)

// lastIndexOf() -> similar ao indexOf(), porém analisa de trás para a frente
console.log(`o termo pípedo começa no índice: ${p.lastIndexOf(('pípedo'), 3)}`)

// expressões regulares (estudar mais depois)
console.log(p.match(/[A-Z]/g), p.match(/[a-z]/g), !!p.match('pípea'), '<-------------------- dá false porque não tem')

// search encontra a lista de termos e aponta o índice onde inicia
console.log(p.search(/[p]/g))

// .replace('termoSubstituido', 'termoAAdicionar') substitui, como por exemplo vírgula e etc
// .replaceAll() -> similar, mas realiza alteração em todas as ocorrências
console.log(p.replace('í', 'i'), '<- ficou sem acento')

// .slice(); pode ser usado negativo. Se botar -4, vai do último termo até o 4º de trás para a frente
console.log(p.slice(0, 4), '<- até o índice 3') // vai até o 4 sem incluir o 4
console.log(p.slice(-4)); /* similar a: */ console.log(p.slice(22))

// .split -> sempre que ele encontrar o termo, ele divide o array, sem o termo informado
// pode ser usado para criar array de palavras da string
// segundo termo indica quantas vezes vai ocorrer
console.log(p.split('p', 3))

// toUpperCase() -> tudo maiúscula; toLowerCase() -> tudo minúscula
console.log(p.toUpperCase())
console.log(p.toLowerCase())

console.log(p.replace(/ /g, '').length)

const rafael = 'Homem com cabelos calvos'
console.log(rafael.indexOf('vos'))