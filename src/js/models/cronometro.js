import { tratarTime } from "../controller/tratarDados.js";
import { removerClassCronometro } from "../controller/mudarSetUp.js";

const buttonCronometro = document.getElementById('cronometro')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')
const textCronometro = document.getElementById('textCrono')

class Cronometro {

    static segundos = 0
    static minutos = 0
    static horas = 0
    static time = 0

    static timerCronometro() {
        Cronometro.time = setInterval(() => {

            Cronometro.segundos++

            if (Cronometro.segundos > 59) {
                Cronometro.segundos = 0
            } if (Cronometro.segundos == 59) {
                Cronometro.minutos++
            } if (Cronometro.minutos > 59) {
                Cronometro.minutos = 0
            } if (Cronometro.minutos == 59 && Cronometro.segundos == 59) {
                Cronometro.horas++
            } if (Cronometro.horas > 23 && Cronometro.minutos > 59 && Cronometro.segundos > 59) {
                Cronometro.horas = 0
                Cronometro.minutos = 0
                Cronometro.segundos = 0
            }
        }, 1000)
        return Cronometro.time
    }

    static start() {
        Cronometro.timerCronometro()
    }

    static stop() {

        clearInterval(Cronometro.time)
    }

    static reset() {
        this.segundos = 0
        this.minutos = 0
        this.horas = 0
    }

   static criarTemplate() {
        setInterval(() => {
            textCronometro.innerText = `${tratarTime(Cronometro.horas)}: ${tratarTime(Cronometro.minutos)}: ${tratarTime(Cronometro.segundos)}`
            return textCronometro

        }, 100)
    }
}




buttonCronometro.addEventListener('click', () => {
    removerClassCronometro()
    Cronometro.criarTemplate()
})
buttonStart.addEventListener('click', () => {
    Cronometro.start()
})
buttonPause.addEventListener('click', () => {
    Cronometro.stop()
})
buttonReset.addEventListener('click', () => {
    Cronometro.reset()
    Cronometro.stop()
})


export { buttonCronometro, buttonStart, buttonPause, buttonReset, textCronometro }