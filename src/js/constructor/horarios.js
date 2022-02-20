
class CreateClock{
    constructor(name){
        this._nameRegiao = name
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.times = 0
        this._tempoEscrito = ''
        this.tempo()
    }
    get nameRegiao(){
        return this._nameRegiao
    }
    get tempoEscrito(){
        return this._tempoEscrito
    }
    set nameRegiao(value){
        const arrCidades = ['Curitiba', 'Florianópolis', 'Porto Alegre','São Paulo','Rio de Janeiro','Belo Horizonte','Vitória','Brasília']
        if (arrCidades.includes(value)){
            this._nameRegiao = value
        }
    }

    set tempoEscrito(value){
        if (typeof value == 'string'){
            this._tempoEscrito = value
        }else{
            return `${value} não é um parametro aceito`
        }
    }

    tempo(){
        const liContent = document.createElement('li')
        const spanCidade = document.createElement('span')
        const spanTime = document.createElement('span')
           
        liContent.classList.add('main__content__OutrosTimes--li')
        spanCidade.classList.add('main__content__OutroTimes-span-cidade')
        spanTime.classList.add('clock','clock-li')
        setInterval(()=>{
            let time = new Date
            this.horas = time.getHours()
            this.minutos = time.getMinutes()
            this.segundos = time.getSeconds()
    
            this.tempoEscrito = `${tratarTime(this.horas)}: ${tratarTime(this.minutos)}: ${tratarTime(this.segundos)}` 
            spanTime.innerText = this.tempoEscrito
        },1000) 
        spanCidade.innerText = this._nameRegiao
        liContent.appendChild(spanCidade)
        liContent.appendChild(spanTime)
        outrosContent.appendChild(liContent)
    }

}

let horarioCuritiba       = new CreateClock(['Curitiba'])
let horarioFLorianopolis  = new CreateClock(['Florianópolis'])
let horarioPortoAlegre    = new CreateClock(['Porto Alegre'])
let horarioSaoPaulo       = new CreateClock(['São Paulo'])
let horarioRioDeJaneiro   = new CreateClock(['Rio de Janeiro'])
let horarioMinasGerais    = new CreateClock(['Belo Horizonte'])
let horarioEspiritoSanto  = new CreateClock(['Vitória'])
let horarioBrasilia       = new CreateClock(['Brasília'])



