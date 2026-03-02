const x = ''

console.log(!! x) //uma string vazia sempre vai ser false, o !! nos ajuda a ver se a condição é true or false

const y = 0
console.log(!!y) //o zero tambem é considerado como false

const a = null

console.log(!!a)//nul é false tambem

const b = undefined

console.log(!!a) // undefined tambem dá false

const list = []

console.log(!!list) //um array vazio é true

const object = {}

console.log(!!object) //vai dar true mesmo sendo vazio

