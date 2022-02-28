import { tratarDia,tratarMes,tratarTime } from "../controller/tratarDados.js";
import { removerClassRelogio } from "../controller/mudarSetUp.js";



const mudarRelogio = document.getElementById('relogio')
const relogio = document.querySelector(".clock")
const data = document.querySelector('#date')
const titlle = document.getElementById('titleClock')


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




mudarRelogio.addEventListener('click', ()=>{
    titlle.innerText = 'Horário atual: '
    removerClassRelogio()
    updateClock()
})


export{updateClock,updateCalender,titlle,relogio,data}