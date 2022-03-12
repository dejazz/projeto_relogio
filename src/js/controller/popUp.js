import { ul,divPopUp } from "./InterfaceFeriados.js"
const popUpButton = document.querySelector('.buttonPopUp')

class PopUp {
  
   static removerContent(e){
       e.preventDefault()

        divPopUp.classList.add('remover')
        popUpButton.classList.add('remover')
        ul.classList.add('remover')

    }

    static removerInterface(){
        popUpButton.addEventListener('click',(e)=>{
            PopUp.removerContent(e)
        })
    }
}


export default PopUp