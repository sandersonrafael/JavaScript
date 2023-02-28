function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        realizaConta() {
            let conta = this.display.value
            conta = eval(conta)
            this.display.value = conta
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) { // as teclas possuem código para ter seus eventos obtidos. Cada tecla tem uma keyCode difernete
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.display.value = ''
                }

                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1)
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()