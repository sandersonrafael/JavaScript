// Todos dados new Date()
const data = new Date()
const diaNaSemana = data.getDay()
const diaMes = data.getDate()
const mesNoAno = data.getMonth()
const ano = data.getFullYear()
const hora = (data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()) //hora no formato 00
const minuto = (data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()) // minutos no formato 00
let dia
let mes
let dataCompleta = document.querySelector('#hoje')

// Dia da Semana
switch (diaNaSemana) {
    case 0:
        dia = `Domingo`
        break
    case 1:
        dia = `Segunda-feira`
        break
    case 2:
        dia = `Terça-feira`
        break
    case 3:
        dia = `Quarta-feira`
        break
    case 4:
        dia = `Quinta-feira`
        break
    case 5:
        dia = `Sexta-feira`
        break
    case 6:
        dia = `Sábado`
}

// Mês do ano
switch (mesNoAno) {
    case 0:
        mes = `janeiro`
        break
    case 1:
        mes = `fevereiro`
        break
    case 2:
        mes = `março`
        break
    case 3:
        mes = `abril`
        break
    case 4:
        mes = `maio`
        break
    case 5:
        mes = `junho`
        break
    case 6:
        mes = `julho`
        break
    case 7:
        mes = `agosto`
        break
    case 8:
        mes = `setembro`
        break
    case 9:
        mes = `outubro`
        break
    case 10:
        mes = `novembro`
        break
    case 11:
        mes = `dezembro`
}
dataCompleta.innerHTML += `${dia}, ${diaMes} de ${mes} de ${ano} ${hora}:${minuto}`
