// Para parâmetros solicitados mas não passados, seus valores são atribuídos automaticamente como undefined. Ex:
function indefinido(a, b, c, d) {
    return [a, b, c, d]
}
console.log(indefinido(1, 2, 3), '<-- O valor de "d" veio como undefined porque não foi passado')

// Há duas maneiras mais comuns de atribuir valores padrões para os parâmetros

// Método mais antigo (apresenta algumas falhas devido a existência de valores "falsy" que são interpretados como false)
function valorPadrao1 (a, b, c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return [a, b, c]
}
console.log(valorPadrao1(1, 2), '<-- "c" não foi passado, então ficou com o valor dito como padrão, o 0')

// Método moderno
function valorPadrao2(a=0, b=0, c=0) {
    return [a, b, c]
}
console.log(valorPadrao2(1, 2), '<-- retorna o 0 para o c devido ser o valor padrão')