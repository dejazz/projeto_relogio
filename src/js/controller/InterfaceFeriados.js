import FeriadosBrasil from "../models/BuscarFeriados.js"
await FeriadosBrasil.getFeriados()

class InterfaceFeriados {


    static template(e) {

        e.preventDefault()
        const ul = document.querySelector('.contentFeriados')
        const buttonPopUp = document.querySelector('.buttonPopUp')
        ul.innerHTML = ''
        ul.classList.remove('remover')
        buttonPopUp.classList.remove('remover')
        buttonPopUp.innerText = 'X'

        ul.appendChild(buttonPopUp)
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
        console.log(ul)
        return ul
    }
}

export default InterfaceFeriados