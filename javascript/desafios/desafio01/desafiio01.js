
let nome = "raoni" //dado imutavel pra saber quem foi que comprou oque
let valorHoraTecnica = "150.0"
let quantidadeHorasTrabalhadas = 10
let desconto = 10

const nomeLimpo = nome.trim()
const valorHoraTecnicaModificado = Number(valorHoraTecnica)

let valorBruto = quantidadeHorasTrabalhadas * valorHoraTecnica
let valorFinal = valorBruto - (valorBruto * (desconto / 100))

window.alert(`olá ${nome} o valor bruto do pedido foi de ${valorBruto} e o valor final apos aplicado o desconto de ${desconto}% é de ${valorFinal}`)
