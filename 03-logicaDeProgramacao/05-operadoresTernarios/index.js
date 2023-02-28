// há dois tipos:
// 1:

const salarioMinimo = 1302
const necessarioParaViver = 2000
const resposta = salarioMinimo >= necessarioParaViver ? 'Você viverá bem' : 'Você não viverá bem'
console.log(resposta)

// 2: atribui valores padrão para caso o primeiro resulte false (ou falsy)
const pedro = '' || 'Pedro'
console.log(pedro)