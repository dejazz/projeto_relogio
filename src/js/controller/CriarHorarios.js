import CreateClock from "../models/horarios.js"

class CriarHorarios {

    static CriarHorario(data){
        const arrCidades = data
        arrCidades.forEach((item)=>{
                let newHorario =  new CreateClock(item)               
        })
    }
}

export default CriarHorarios