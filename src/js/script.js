const relogio = document.querySelector(".clock")
const data = document.querySelector('#date')
const titlle = document.getElementById('titleClock')
const outrosContent = document.querySelector('.main__content__OutrosTimes')
const div = document.createElement('div')
const temp = document.getElementById('temporizador')
const tempHTML = document.getElementById('temp1')
const buttonOutros = document.getElementById('buttonOutrosTimes')
const inputCidade = document.createElement('input')
const buttonInput = document.createElement('button')

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



function criarInput(){

    const form = document.createElement('form')

    div.classList.add('input__content')
    inputCidade.classList.add('input__content--input')
    buttonInput.innerText = 'Adicionar'

    form.appendChild(inputCidade)
    form.appendChild(buttonInput)
    div.appendChild(form)
    outrosContent.appendChild(div)


}

// buttonOutros.addEventListener('click',()=>{ 
//     div.innerHTML = ''
//     criarOutroTime()
// })

