
import { tratarTime } from "../controller/tratarDados.js";
import { removerClassTemporizador } from "../controller/mudarSetUp.js";

const temp = document.getElementById('temporizador')
const tempHTML = document.getElementById('temp1')

class Temporizador {
    static segundos = 0
    static minutos = 0
    static horas = 0
    static time = 0

   static contarSegundo() {

        setInterval(() => {
            this.segundos++
            if (this.segundos > 59) {
                this.segundos = 0
            }
        }, 1000)
        return this.segundos
    }

    static contarMinutos() {
        setInterval(() => {
            if (this.segundos == 59) {
                this.minutos++
            } if (this.minutos > 59) {
                this.minutos = 0
            }
        }, 10)
        return this.minutos
    }

    static contarHoras() {
        setInterval(() => {
            if (this.minutos == 59 && this.segundos == 59) {
                this.horas++
            } if (this.horas > 23 && this.minutos > 59 && this.segundos > 59) {
                this.horas = 0
                this.minutos = 0
                this.segundos = 0
            }
        }, 10)
    }
    static criarTemplate() {
        setInterval(() => {
            tempHTML.innerText = `${tratarTime(Temporizador.horas)}: ${tratarTime(Temporizador.minutos)}: ${tratarTime(Temporizador.segundos)}`
            return tempHTML

        }, 100)
    }
}

temp.addEventListener('click', () => {
    Temporizador.contarSegundo()
    Temporizador.contarMinutos()
    Temporizador.contarHoras()
    Temporizador.criarTemplate()
    removerClassTemporizador()
})

export { Temporizador, temp, tempHTML }
