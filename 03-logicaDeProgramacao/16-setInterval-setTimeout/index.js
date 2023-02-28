function mostraHora() {
    let data = new Date()
    
    return data.toLocaleString()
}

// setInterval(função(){}, timer) -> executa o comando repetidas vezes conforme timer em milissegundos informado
const timer = setInterval(() => console.log(mostraHora()), 1000)

// setTimeout(função(){}, timer) -> executa o termo o comando uma vez depois do timer informado em milissegundos
setTimeout(() => clearInterval(timer), 5000)
setTimeout(() => console.log('Olá mundo'), 3000)