
import {tratarTime } from "../controller/tratarDados.js";
import { removerClassTemporizador } from "../controller/mudarSetUp.js";

const temp = document.getElementById('temporizador')
const tempHTML = document.getElementById('temp1')
const temporizador = {
    horas: 0,
    minutos: 0,
    segundos:0,

    contarSegundo(){
     
       setInterval(()=>{
            this.segundos++
            if(this.segundos > 59){
                this.segundos = 0
            }  
        },1000)
        return this.segundos
    },

    contarMinutos(){
        setInterval(()=>{
            if(this.segundos == 59){
                this.minutos++
            }if(this.minutos > 59){
                this.minutos = 0
            }
        },1000)
        return this.minutos
    },

    contarHoras(){
        setInterval(()=>{
            if(this.minutos == 59 && this.segundos == 59){
                this.horas++
            }if(this.horas > 23 && this.minutos > 59 && this.segundos > 59){
                this.horas = 0
                this.minutos = 0
                this.segundos = 0
            }
        },1000)
    },
    
}





function alterarHtml(){
    tempHTML.innerText = `${tratarTime(temporizador.horas)}: ${tratarTime(temporizador.minutos)}: ${tratarTime(temporizador.segundos)}`
    return tempHTML
   }


setInterval(alterarHtml,1000)
temp.addEventListener('click',()=>{
    temporizador.contarSegundo()
    temporizador.contarMinutos()
    temporizador.contarHoras()
    removerClassTemporizador()
    alterarHtml()
})

export {temporizador,temp,tempHTML}
