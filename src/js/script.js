import CriarHorarios from "./controller/CriarHorarios.js";
import {InterfaceFeriados} from "./controller/InterfaceFeriados.js";
import PopUp from "./controller/popUp.js";
import { Relogio} from "./models/relogio.js";
import { mudarCor,mudar } from "./controller/mudarCor.js";


const outrosContent = document.querySelector('.main__content__OutrosTimes')
const cidades       = ['Curitiba', 'Florianópolis', 'Porto Alegre', 'São Paulo','Rio de Janeiro', 'Belo Horizonte', 'Vitória', 'Brasília', 'Maceió', 'Salvador']
const localFeriados = document.getElementById('localFeriados')  


CriarHorarios.CriarHorario(cidades)
PopUp.removerInterface()

mudarCor.addEventListener('click', mudar)
localFeriados.addEventListener('click',(e)=>{
    InterfaceFeriados.template(e,cidades)
})




export {outrosContent}
