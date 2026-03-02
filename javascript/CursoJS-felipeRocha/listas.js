const names = ["felipe", "gabriela", "joaquim"]

const gabriela = names [1]

console.log(gabriela)

names.push("pietro") //adiciona um elemento no fim da lista

names.unshift("julia") //adiciona no inicio da lista

names.pop() //retira o ultimo elemento da lista, que nesse caso era o pietro

names[2] = "Gustavo" //mudo o valor do 3 elemento da lista

console.log(names.indexOf('gabriela')) //me retorna a posição do elemento na lista, caso nao encontre retorna -1

const sortedNames = names.sort()//ordena os listas alfabeticamente

const nameIsArray = Array.isArray(names) //retorna se o elemento é uma lista ou não

const numbers = [1,2,3,4,5,6,7,8,9,10] //por algum motivo quero multiplicar todos os numeros por 2
//o map executa uma determinada função em cada item da lista retornando um novo array modificado

const numberMultiplyByTwo = numbers.map(function(itemAtual){return itemAtual * 2}) // passo como parametro pra função o nome de cada variavel dentro do array, que nesse caso eu coloquei de item atual

console.log(numberMultiplyByTwo)

const ages = [14,15,16,22,50,80]

const evenAges = ages.filter(function(itemAtual){ // filtro apenas as idades pares
    return age % 2 === 0
})

console.log(evenAges)

//reduce é util quando eu quero reduzir todos os elementos da lista pra um só

const numeros = [1,2,3,4,5,6,7,8,9,10]

const soma = numeros.reduce(function(numeroIncial, acumulador){ //acumulator é o valor atual da soma de todos os numeros do array
    return acumulador + numeroIncial
})
