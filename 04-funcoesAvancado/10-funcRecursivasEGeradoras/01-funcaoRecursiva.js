// Trata-se de uma função que chama a si mesma
// Faz algo similar ao que as estruturas de repetição fazem
// O node vai encerrar a execução se houverem muitas recursividades

function recursiva(max) {
    if (max == 10) return
    max++
    console.log(max)
    recursiva(max)
}


recursiva(0)