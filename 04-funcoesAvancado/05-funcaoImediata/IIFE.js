// IIFE -> Immediately Invoked Function Expression
// Função que é chamada assim que é definida
// Para chamar, basta escrever a função como: (function(parametros) {bloco})()
// É importante para fugir do escopo global, pois tudo que é definido dentro dela
// não é salvo globalmente

// É necessário que antes de uma IIFE, exista um ";", pois caso contrário,
// o javascript pensa que a IIFE está tentando executar o termo anterior como função.

// Ex:

/* const pessoa = 'João'
(function() {
    console.log(12387183)
})() */

// Apresenta erro que 'João' não é uma função, pois o javascript tenta ler como:
// 'João'(function(){})(), como se o próprio termo 'João' fosse uma função
// O que resulta erro.

// Porém, botando ";" após joão, o problema é sanado. Ex:
const pessoa2 = 'João Também';
(function() {
    console.log(pessoa2)
})();

// Ex usual:
// No () final, podem ser passados parâmetros
(function(idade, peso, altura) {
    
    const sobrenome = 'Miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }
    
    falaNome();

    (function (){
        console.log(idade, peso, altura)
    })()
})(30, 80, 1.80);

(function(){console.log('Olá mundo!')})()

// apresentará erro, pois a IIFE protege a função falaNome() do escopo global
falaNome() ;

