// Em vez do switch case, usei array e no final, usei os dados do new Date(), dia da semana e mês do ano, como índices dos arrays

const data = new Date()
const diaNaSemana = data.getDay()
const diaMes = data.getDate()
const mesNoAno = data.getMonth()
const ano = data.getFullYear()
const hora = (data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()) //hora no formato 00
const minuto = (data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()) // minutos no formato 00
let dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let dataCompleta = document.querySelector('#hoje')


dataCompleta.innerHTML = `<p>Primeiro método: </p>${dias[diaNaSemana]}, ${diaMes} de ${meses[mesNoAno]} de ${ano} ${hora}:${minuto}`

// método ainda mais resumido. O javascript mostra tudo de uma vez, Pelo método new Date().toLocalString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})
let horario = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})
dataCompleta.innerHTML += `<p>Segundo método: </p><p>${horario}</p>`

