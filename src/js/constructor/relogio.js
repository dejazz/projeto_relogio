import { tratarDia,tratarMes,tratarTime } from "../controller/tratarDados.js";
import { outrosContent } from "../script.js";
import {buttonStart,buttonPause,buttonReset,buttonStop,textCronometro} from "./cronometro.js"


const mudarRelogio = document.getElementById('relogio')
const relogio = document.querySelector(".clock")
const data = document.querySelector('#date')
const titlle = document.getElementById('titleClock')
const temp = document.getElementById('temporizador')
const tempHTML = document.getElementById('temp1')

function updateClock() {
    let time     = new Date();
    let horas    = time.getHours();
    let minutos  = time.getMinutes();
    let segundos = time.getSeconds();

    relogio.innerText = `${tratarTime(horas)}: ${tratarTime(minutos)}: ${tratarTime(segundos)}`
    return relogio
}
updateClock();
setInterval(updateClock, 1000)

function updateCalender(){
    let calender = new Date ()
    let dia      = calender.getDay()
    let nomeDia  = calender.getDate()
    let mes      = calender.getMonth()
    let ano      = calender.getFullYear()

    data.innerText = `${tratarDia(dia)}, ${nomeDia} de ${tratarMes(mes)} de ${ano}`
}

setTimeout(updateCalender,1000)


function removerClassRelogio(){
    relogio.classList.remove('remover')
    outrosContent.classList.remove('remover')
    data.classList.remove('remover')
    tempHTML.classList.add('remover')
    textCronometro.classList.add('remover')
    buttonStart.classList.add('remover')
    buttonPause.classList.add('remover')
    buttonReset.classList.add('remover')
    buttonStop.classList.add('remover')
}

mudarRelogio.addEventListener('click', ()=>{
    titlle.innerText = 'Horário atual: '
    removerClassRelogio()
    updateClock()
})


export{updateClock,updateCalender,temp,titlle,relogio,data,tempHTML}