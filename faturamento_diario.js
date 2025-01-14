//  faturamento diário 	- Alan Teixeira de Matos - alanteixeiradematos@gmail.com

const dados = './dados.json'

fetch(dados).then(response => {
    if (!response.ok) {
        throw new Error('Erro na requisição')
    }
    return response.json()
}).then(data => {
    console.log(data)
    let media = (data.reduce((acc, dia) => acc + dia.valor, 0)) / data.length

    let maiorAnterior = { dia: 0, valor: 1 }
    data.map(dia => {
        maiorAnterior = dia.valor > maiorAnterior.valor ? dia : maiorAnterior
    })

    let menorAnterior = { dia: 0, valor: maiorAnterior.valor }
    data.map(dia => {
        menorAnterior = dia.valor < menorAnterior.valor && dia.valor > 0 ? dia : menorAnterior
    })

    let countDiasMaioresQueAMedia = 0

    data.map(dia => {if(dia.valor > media){countDiasMaioresQueAMedia++}})    

    console.log({
        media: media,
        maior: maiorAnterior,
        menor: menorAnterior,
        maiorQueAMedia: countDiasMaioresQueAMedia
    })
}).catch(error => {
    console.error("Erro: ", error)
})