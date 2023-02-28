
// similar ao for, mas a variável de controle é criada por fora
let c = 0
while (c <= 10) {
    console.log(c)
    c++
}; console.log();

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)        // vantagem do Math.floor() em vez do toFixed(0), é que ele transforma o valor da variável para o arredondado, enquanto o toFixed apenas mostra arredondado, sem alterar o valor
}
let rand = random(1, 50)
console.log(rand)

while (rand !== 10) {       // vai executar o random até obter número 10
    rand = random(1, 50)
    console.log(rand)
}