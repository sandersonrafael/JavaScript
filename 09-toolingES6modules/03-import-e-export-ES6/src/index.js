// importa o nome do arquivo modulo1.js
const nome = 'Pedro'
import { nome as nome2, sobrenome, idade, soma, Pessoa as Gente} from './modulo1.js'
// caso já tenha uma variável neste documento com o mesmo nome, pode-se solicitar a importação com outro nome, usando "as"

console.log(nome, '<- 1 , 2 ->', nome2, sobrenome, idade, soma(1,5))

const p1 = new Gente('Luiz', 'Otávio')
console.log(p1)

// para importar tudo, posso usar:
// import * as Modulo from './modulo1.js'

// importando subtração, que é o default:
import qualquerNomeDeFuncao from './modulo1'
console.log(qualquerNomeDeFuncao(10, 3)) // vai exibir 7, pois chama a default que retorna (x - y)