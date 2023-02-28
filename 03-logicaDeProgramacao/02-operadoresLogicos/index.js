/* 
&& -> AND -> E -> Todas expressões precisam confirmar true
|| -> OR -> OU -> Ao menos uma expressão precisa retornar true
! -> NOT -> NÃO
Valores que avaliam para false (falsy): 
false
'' "" ``
null / undefined
NaN
0
*/
console.log(!!false, !!'', !!"", !!``, !!null, !!undefined, !!NaN, !!0)


// PROPRIEDADES ESPECÍFICAS do &&
// && -> QUANDO ALGUM TERMO RESULTA EM FALSO, A EXPRESSÃO DÁ "RETURN VALOR"
// Isto é: ele retorna o valor FALSO
// Ex:
console.log('João' && 0 && 'Felipe') // retorna 0 em vez de "false"
console.log('Paulo' && 'Felipe' && 'André') // se não encontra falso, retorna o último valor


// PROPRIEDADES ESPECÍFICAS do ||
// && -> QUANDO ALGUM TERMO RESULTA EM VERDADEIRO, A EXPRESSÃO DÁ "RETURN VALOR"
// Isto é: ele retorna o valor VERDADEIRO
// Ex:
console.log(0 || false || '' || `` || 'Pedro' || true) // retorna o valor verdadeiro, 'pedro'
console.log(false || '' || `` || 0) // se não encontra verdadeiro, retorna o último valor