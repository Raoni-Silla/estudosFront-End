document.querySelector('input.validar').addEventListener('click', validar)

function validar (){
    
    let caixaDistancia = document.querySelector('input#distancia')
    let caixaValorServico = document.querySelector('input#valorServico')
    let caixaDiaSemana = document.querySelector('input#diaSemana')
    let status = document.querySelector('p#status')

    const distancia = Number(caixaDistancia.value)
    const valorServico = Number(caixaValorServico.value)
    const diaSemana = caixaDiaSemana.value.trim().toUpperCase()

    let custoDeslocamento = distancia * 2.50

    let lucroReal = valorServico - custoDeslocamento

    if(lucroReal > 50 && distancia <= 100 && diaSemana != 'DOMINGO'){
        status.innerHTML = `Agendamento Confirmado! Lucro de R$ ${lucroReal}`
        status.style.color = 'green'
    }else{
         status.innerHTML = `Agendamento Recusado! por critérios de logística ou folga`
        status.style.color = 'red'
    }

}