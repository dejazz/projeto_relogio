import { tratarDia,tratarMes,tratarTime } from "../controller/tratarDados.js";
import {temp,titlle,relogio,data,tempHTML} from "./relogio.js";
import { outrosContent } from "../script.js";
const buttonCronometro = document.getElementById('cronometro')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')
const buttonStop = document.getElementById('stop')
const textCronometro = document.getElementById('textCrono')

const cronometro  = {
    segundos: 0,
    minutos: 0,
    horas: 0,
    time: 0,
    timerCronometro(){
        this.time = setInterval(()=>{
         
            this.segundos++
       
        if(this.segundos > 59){
             this.segundos = 0
        }if(this.segundos == 59){
            this.minutos++
        }if(this.minutos > 59){
            this.minutos = 0
        } if(this.minutos == 59 && this.segundos == 59){
            this.horas++
        }if(this.horas > 23 && this.minutos > 59 && this.segundos > 59){
            this.horas = 0
            this.minutos = 0
            this.segundos = 0
        }
     },1000)
     return this.time
    },
    
    start(){
        this.timerCronometro()
    },

    stop(){
         
        clearInterval(this.time)
    },

    reset(){
        this.segundos = 0
        this.minutos = 0
        this.horas = 0
    }
}
    

function removerClassCronometro(){
    titlle.innerText = 'Cronômetro: '
    relogio.classList.add('remover')
    outrosContent.classList.add('remover')
    data.classList.add('remover')
    tempHTML.classList.add('remover')
    textCronometro.classList.remove('remover')
    buttonStart.classList.remove('remover')
    buttonPause.classList.remove('remover')
    buttonReset.classList.remove('remover')
    buttonStop.classList.remove('remover')
}

function alterarHtml(){
    setInterval(()=>{
        textCronometro.innerText = `${tratarTime(cronometro.horas)}: ${tratarTime(cronometro.minutos)}: ${tratarTime(cronometro.segundos)}`
        return textCronometro

    },10)
   }

buttonCronometro.addEventListener('click',()=>{
    removerClassCronometro()
    alterarHtml()
})
buttonStart.addEventListener('click', ()=>{
    cronometro.start()  
})
buttonPause.addEventListener('click', ()=>{
    cronometro.stop()
})
buttonReset.addEventListener('click', ()=>{
    cronometro.reset()
})
buttonStop.addEventListener('click',()=>{
    cronometro.stop()
    cronometro.reset()
})

export{buttonCronometro,buttonStart,buttonPause,buttonReset,buttonStop,textCronometro}