export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) == -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas
    
}

export const ordenaDatas = (data) => {

    data.sort((a , b) => {

        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData
    })
}

export const ordenaHorarios = (tempo) => {

    tempo.sort((a, b) => {

        const primeiraHora = moment(a, 'HH:mm').format('HHmm')
        const segundaHora = moment(b, 'HH:mm').format('HHmm')
        console.log(primeiraHora)

        return primeiraHora - segundaHora
    })
}
