let nome = prompt ('Digite seu nome ')
let idade = prompt ('Digite sua idade ')
let tempoExp = prompt ('Digite o tempo de experiencia na área ')
let totalServicos = 55
let possuiCertificado = false
const nomeLimpo = nome.trim().toUpperCase()
const idadeConvertida = Number(idade)

if(idadeConvertida < 16){
    alert(`De acordo com a lei 10.097/00 você ainda não possui a idade minima para trabalhar`)
}else{

 const tempoExpConvertido = Number(tempoExp)

 const ganhouSeloVip = (tempoExpConvertido > 1 && totalServicos > 55) || possuiCertificado

 alert(`ANALISANDO O PERFIL DO USUARIO : ${nomeLimpo}.....`)

 if(ganhouSeloVip){
    alert(`após verificações o usuario pode receber o selo vip (${ganhouSeloVip})`)
}else{
    alert(`após verificações o usuario não pode receber o nosso selo vip`)
}

}

