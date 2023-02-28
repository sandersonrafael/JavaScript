//              0        1         3
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)

alunos[0] = 'Eduardo'
alunos[3] = 'Luiza'
console.log(alunos)

// para adicionar sempre um novo termo, pode-se usar a expressão:
alunos[alunos.length] = 'Nova Pessoa'
console.log(alunos)

// .push('') adiciona um novo termo no final do array
alunos.push('Mais um novo aluno')
console.log(alunos)

// .unshift('') adiciona um novo termo no iníncio do array
alunos.unshift('Joãozinho')
console.log(alunos)

// .pop -> remove o último termo
const removido = alunos.pop() // dá para salvar o aluno que foi removido numa variável
console.log(removido)
console.log(alunos)

// .shift() -> remove o primeiro termo
alunos.shift()
console.log(alunos)

// delete alunos[1] vai deletar o termo de índice 1, mas vai ficar vazio
delete alunos[1]
console.log(alunos)
console.log()

const alunos2 = ['Luiz', 'Maria', 'João', 'Luiza', 'Eduardo']
console.log(alunos2)

// .slice (indiceInicial, indiceFinal) -> cria um novo array com termos selecionados
// primeiro indice é onde começa e segundo onde termina (sem incluir o segundo indice)
// o segundo indice informado pode ser negativo. Nesse caso, ele exclui os últimos índices igual ao número negativo informado.
console.log(alunos2.slice(0, 3))
console.log(alunos2.slice(0, -2)); console.log()
console.log(alunos2)

// .splice (indice, quantidadeExcluida, termosAdiocionados, ...)
alunos2.splice(2, 1, 'Joãozinho') // Exclui um termo a partir do índice 2 (contando com ele), e adiciona nesse mesmo início o nome joãozinho
console.log(alunos2)
alunos2.splice(1, 4) // exclui 4 termos a partir do índice 1 (contando com ele)
console.log(alunos2)

// typeof de um array retorna object.
// instanceof Array é usado para verificar se é um array. Ex:
console.log(typeof alunos2)
console.log(alunos2 instanceof Array)
