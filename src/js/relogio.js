const mudarRelogio = document.getElementById('relogio')


function updateClock() {
    let time     = new Date();
    let horas    = time.getHours();
    let minutos  = time.getMinutes();
    let segundos = time.getSeconds();

    relogio.innerText = `${tratarTime(horas)}: ${tratarTime(minutos)}: ${tratarTime(segundos)}`
    return relogio
}
updateClock();
setInterval(updateClock, 1000)

function updateCalender(){
    let calender = new Date ()
    let dia      = calender.getDay()
    let nomeDia  = calender.getDate()
    let mes      = calender.getMonth()
    let ano      = calender.getFullYear()

    data.innerText = `${tratarDia(dia)}, ${nomeDia} de ${tratarMes(mes)} de ${ano}`
}

setTimeout(updateCalender,1000)


function removerClassRelogio(){
    relogio.classList.remove('remover')
    outrosContent.classList.remove('remover')
    data.classList.remove('remover')
    tempHTML.classList.add('remover')
    textCronometro.classList.add('remover')
    buttonStart.classList.add('remover')
    buttonPause.classList.add('remover')
    buttonReset.classList.add('remover')
    buttonStop.classList.add('remover')
}

mudarRelogio.addEventListener('click', ()=>{
    titlle.innerText = 'Horário atual: '
    removerClassRelogio()
    updateClock()
})


