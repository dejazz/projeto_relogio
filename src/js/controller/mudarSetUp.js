import {titlle,relogio} from "../models/relogio.js";
import {buttonStart,buttonPause,buttonReset,textCronometro} from "../models/cronometro.js"
import { tempHTML } from "../models/temporizador.js";
import { outrosContent} from "../script.js";
import {data} from "../models/calender.js"



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
   
}

function removerClassRelogio(){
    relogio.classList.remove('remover')
    outrosContent.classList.remove('remover')
    data.classList.remove('remover')
    tempHTML.classList.add('remover')
    textCronometro.classList.add('remover')
    buttonStart.classList.add('remover')
    buttonPause.classList.add('remover')
    buttonReset.classList.add('remover')
   
}


function removerClassTemporizador(){
    titlle.innerText = 'Temporizador: '
    relogio.classList.add('remover')
    textCronometro.classList.add('remover')
    outrosContent.classList.add('remover')
    buttonStart.classList.add('remover')
    buttonPause.classList.add('remover')
    buttonReset.classList.add('remover')
    tempHTML.classList.remove('remover')
    data.classList.remove('remover')
}




export {removerClassCronometro,removerClassRelogio,removerClassTemporizador}