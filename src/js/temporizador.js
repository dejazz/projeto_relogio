
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
temporizador.contarSegundo()
temporizador.contarMinutos()
temporizador.contarHoras()

function removerClassTemporizador(){
    titlle.innerText = 'Temporizador: '
    relogio.classList.add('remover')
    textCronometro.classList.add('remover')
    outrosContent.classList.add('remover')
    buttonStart.classList.add('remover')
    buttonPause.classList.add('remover')
    buttonReset.classList.add('remover')
    buttonStop.classList.add('remover')
    tempHTML.classList.remove('remover')
    data.classList.remove('remover')
}


function alterarHtml(){
    tempHTML.innerText = `${tratarTime(temporizador.horas)}: ${tratarTime(temporizador.minutos)}: ${tratarTime(temporizador.segundos)}`
    return tempHTML
   }


setInterval(alterarHtml,1000)
temp.addEventListener('click',()=>{
   
    removerClassTemporizador()
    alterarHtml()
})

