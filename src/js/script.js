import CreateClock from "./constructor/horarios.js"
import { updateClock,updateCalender } from "./constructor/relogio.js";
import { mudarCor,mudar } from "./controller/mudarCor.js";
const outrosContent = document.querySelector('.main__content__OutrosTimes')

updateClock();
setInterval(updateClock, 1000)
setTimeout(updateCalender,1000)

mudarCor.addEventListener('click', mudar)

let horarioCuritiba       = new CreateClock(['Curitiba'])
let horarioFLorianopolis  = new CreateClock(['Florianópolis'])
let horarioPortoAlegre    = new CreateClock(['Porto Alegre'])
let horarioSaoPaulo       = new CreateClock(['São Paulo'])
let horarioRioDeJaneiro   = new CreateClock(['Rio de Janeiro'])
let horarioMinasGerais    = new CreateClock(['Belo Horizonte'])
let horarioEspiritoSanto  = new CreateClock(['Vitória'])
let horarioBrasilia       = new CreateClock(['Brasília'])
let horarioAlagoas        = new CreateClock(['Maceió'])
let horarioBahia          = new CreateClock(['Salvador'])






export {outrosContent}

const div = document.createElement('div')
const buttonOutros = document.getElementById('buttonOutrosTimes')
const inputCidade = document.createElement('input')
const buttonInput = document.createElement('button')


// buttonOutros.addEventListener('click',()=>{ 
//     criarInput()
// })
// buttonInput.addEventListener('submit',(e)=>{
//     console.log('oii')
//     let textInput = document.querySelector('.input__content--input').value
//     let newHora = new CreateClock(textInput)
// })
    
    
//     function criarInput(){
        
//         const form = document.createElement('form')
        
//         div.classList.add('input__content')
//         inputCidade.classList.add('input__content--input')
//         buttonInput.innerText = 'Adicionar'
        
//         form.appendChild(inputCidade)
//         form.appendChild(buttonInput)
//         div.appendChild(form)
//         outrosContent.appendChild(div)
        
        
//     }