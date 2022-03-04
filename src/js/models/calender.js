import { tratarDia, tratarMes } from "../controller/tratarDados.js";
const data = document.querySelector('#date')

class Calender {
    constructor() {
        this.dia = 0
        this.nomeDia = ''
        this.mes = ''
        this.ano = 0

    }
    static updateCalender() {
        let calender = new Date()
        let dia = calender.getDay()
        let nomeDia = calender.getDate()
        let mes = calender.getMonth()
        let ano = calender.getFullYear()

        data.innerText = `${tratarDia(dia)}, ${nomeDia} de ${tratarMes(mes)} de ${ano}`
    }

}
setTimeout(Calender.updateCalender, 1000)



export { Calender, data }
