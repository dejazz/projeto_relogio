class FeriadosBrasil {

    static feriados = []


    static async getFeriados() {

        const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/2022`)
        const data = await response.json()
        this.feriados = data
        return data
    }
}


export default FeriadosBrasil