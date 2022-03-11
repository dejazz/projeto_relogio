import { outrosContent } from "../script.js";

const mudarCor = document.getElementById('mudarCor')
const body = document.querySelector('body')
const box = document.querySelector('aside')
const contentMain = document.querySelector('main')


let count = true

function mudar(){

if(count == true){
    body.classList.add('mudarCor')
    box.classList.add('mudarCorBox')
    contentMain.classList.add('mudarContent')
    outrosContent.classList.add('mudarContent')
    count = false


}else if (count == false){
    body.classList.remove('mudarCor')
    box.classList.remove('mudarCorBox')
    contentMain.classList.remove('mudarContent')
    outrosContent.classList.remove('mudarContent')
    count = true
    
}
}




export {mudarCor,mudar}