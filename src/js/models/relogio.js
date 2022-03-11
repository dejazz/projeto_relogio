import {tratarTime } from "../controller/tratarDados.js";
import { removerClassRelogio } from "../controller/mudarSetUp.js";
const relogio = document.querySelector(".clock")
const titlle = document.getElementById('titleClock')
const mudarRelogio = document.getElementById('relogio')

class Relogio {
    constructor() {
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.times = 0
        this._tempoEscrito = ''
    }
    get nameRegiao() {
        return this._nameRegiao
    }
    get tempoEscrito() {
        return this._tempoEscrito
    }
  
    set tempoEscrito(value) {
        if (typeof value == 'string') {
            this._tempoEscrito = value
        } else {
            return `${value} não é um parametro aceito`
        }
    }

    static tempo() {

        setInterval(() => {
            let time = new Date()
            this.horas = time.getHours()
            this.minutos = time.getMinutes()
            this.segundos = time.getSeconds()

            this.tempoEscrito = `${tratarTime(this.horas)}: ${tratarTime(this.minutos)}: ${tratarTime(this.segundos)}`
            relogio.innerText = this.tempoEscrito
        }, 1000)
    
    }

}

mudarRelogio.addEventListener('click', () => {
    titlle.innerText = 'Horário atual: '
    removerClassRelogio()
    Relogio.tempo()
    
})
setInterval(Relogio.tempo, 1000)

export {titlle, relogio, Relogio }