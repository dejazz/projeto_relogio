
function tratarDia(number){
    switch(number){
        case 0:return 'Domingo'
        case 1:return 'Segunda'
        case 2:return 'Terça'
        case 3:return 'Quarta'
        case 4:return 'Quinta'
        case 5:return 'Sexta'
        case 6:return 'Sábado'
    }
    
}

function tratarMes(number){
    switch(number){
        case 0:return 'Janeiro'
        case 1:return 'Fevereiro'
        case 2:return 'Março'
        case 3:return 'Abril'
        case 4:return 'Maio'
        case 5:return 'Junho'
        case 6:return 'Julho'
        case 7: return 'Agosto'
        case 8: return 'Setembro'
        case 9: return 'Outubro'
        case 10: return 'Novembro'
        case 11: return 'Dezembro'
    }
}


function tratarTime(tempo){
    tempo = tempo < 10 ? "0" + tempo : tempo
    return tempo
}

export {tratarDia,tratarMes,tratarTime}