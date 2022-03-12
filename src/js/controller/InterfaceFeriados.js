const ul = document.querySelector('.contentFeriados')
const divPopUp = document.getElementById('divFeriados')
import FeriadosBrasil from "../models/BuscarFeriados.js"
await FeriadosBrasil.getFeriados()

class InterfaceFeriados {


    static template(e) {

        e.preventDefault()
        const buttonPopUp = document.querySelector('.buttonPopUp')
        divPopUp.classList.remove('remover')
        ul.classList.remove('remover')
        buttonPopUp.classList.remove('remover')

        
        FeriadosBrasil.feriados.forEach((item) => {
            const { date, name, type } = item

            const dateTratado = date.split(' ').reverse()
            const li = document.createElement('li')
            li.classList.add('itensFeriado')



            li.innerHTML += `
           
           <h2 class="itensFeriado__tittle">${name}</h2>
           <span class='itensFeriado__date'>${dateTratado}</span>
           <p class='itensFeriado__type'>${type}</p>        
          
            `
            ul.appendChild(li)
        })
   
        return ul
    }
        mostrarResult(){
            const mostrarFeriado = document.getElementById('feriados')

            mostrarFeriado.addEventListener('click',PopUp.removerContent())
        }
}

export  {InterfaceFeriados,ul,divPopUp}