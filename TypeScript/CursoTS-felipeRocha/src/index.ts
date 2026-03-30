let idade: number = 12;
console.log(idade);

//tipos
const nome: string = "ola";
const boleano: boolean = false;
let qualquerCoisa: any = "ola"; //uma variavel sem tipagem estatica
qualquerCoisa = 5;

const ids: number[] = [1, 2, 3, 4, 5, 6];

let age = 5; // o ts define o tipo da variavel automaticamente apartir do primeiro valor passado pra ele


//tupla 
const pessoa: [string,number] = ['carlos',15]; //uma tupla contem dois valores correspondentes (string,number no nosso caso) 

//listaTuplas
const pessoas: [string,number] [] =  [
    ['jonh',15],
    ['margot',21]
]

//intersections
//queremos que uma variavel tenha um tipo ou outro
const produtoID: string | number = 1; //ele pode ser uma string ou um numero


//enum enumerator
enum diasSemana {
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA
}


const dia = diasSemana.SEGUNDA;

console.log(dia);

// type assertions
//tratar uma variavel de um tipo como um tipo diferente

const nomeProduto: any = 'capacete';
/* let idDoCapas = nomeProduto as string; */ //seria uma conversão de tipos
let idDoCapas = <string> nomeProduto;