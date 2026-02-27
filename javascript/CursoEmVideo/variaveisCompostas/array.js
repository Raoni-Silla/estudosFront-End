let num = [5,6,7,8,9]
num.sort()
num.push(1)
console.log(num)
console.log (`tamanho do vetor ${num.length}`)
console.log(num[0])

for(let i = 0; i < num.length ; i++){
    console.log(num[i])
}

for (let i in num ){ //pra cada posição do array mostre o elemento
    console.log(num[i])
}

num.indexOf(7) //js tem o javascript no vetor?, se sim ele retorna a posição da onde esse numero se encontra no vetor

