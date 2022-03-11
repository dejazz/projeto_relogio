const popUpButton = document.querySelector('.buttonPopUp')

class PopUp {
  
   static removerContent(){
        const ul = document.querySelector('.contentFeriados')
        popUpButton.classList.add('remover')
        ul.classList.add('remover')
    }

    static removerInterface(){
        popUpButton.addEventListener('click',()=>{
            PopUp.removerContent()
        })
    }
}

PopUp.removerInterface()
export default PopUp