// funções construtoras sempre começam com a primeira letra maiúscula, e usam o new no começo
//                h   min  seg  miliseg
// const tresHoras = 3 * 60 * 60 * 1000
// const umDia = 24 * 60 * 60 *1000
// const data = new Date(0 + tresHoras + umDia) // data 0, o número represeta milissegundos a partir da data zero: 1970-01-02T03:00:00.000Z
// console.log(data) // toString mostra por extenso a data

let data1 = new Date( 2023, 1, 16, 23, 45, 50, 000) // a, m, d, h, min, seg, ms
console.log(data1.toString())
data1 = new Date('2023-02-16 23:53:40:900') // com strings pode ser digitado nesse formato
console.log(data1.toString())
// funções do new Date atual

data1 = new Date()

console.log('Dia', data1.getDate())
console.log('Mês', data1.getMonth()) // mês começa do 0
console.log('Ano', data1.getFullYear())
console.log('Hora', data1.getHours())
console.log('Min', data1.getMinutes())
console.log('Seg', data1.getSeconds())
console.log('Ms', data1.getMilliseconds())
console.log('Dia semana', data1.getDay()) // dia na semana, começando do 0 -> domingo

console.log(Date.now()) // com o Date.now() se obtêm os milésimos de segundo desse momento do dia
