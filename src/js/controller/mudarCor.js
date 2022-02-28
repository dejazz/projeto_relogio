import { outrosContent } from "../script.js";
const mudarCor = document.getElementById('mudarCor')
const body = document.querySelector('body')
const box = document.querySelector('aside')
const contentMain = document.querySelector('main')
const contentOutrosTimes =  document.querySelector('.main__content__OutrosTimes--li')

let count = true
function mudar(){
if(count == true){
    count = false
    body.classList.add('mudarCor')
    box.classList.add('mudarCorBox')
    contentMain.classList.add('mudarContent')
    outrosContent.classList.add('mudarContent')
    contentOutrosTimes.classList.add('mudarCorOutrosTimes')

}else if (count == false){
    body.classList.remove('mudarCor')
    box.classList.remove('mudarCorBox')
    contentMain.classList.remove('mudarContent')
    outrosContent.classList.remove('mudarContent')
    contentOutrosTimes.classList.remove('mudarCorOutrosTimes')
    count = true
    
}
}


mudarCor.addEventListener('click', mudar)