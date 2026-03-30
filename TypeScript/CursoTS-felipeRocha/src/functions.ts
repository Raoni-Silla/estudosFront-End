const sum = (x: number, y: number) =>{
    return x + y;
};

//usar interfaces juntos com funções
//com intefaces podemos dizer quais parametros e valores essa familia de funções pode receber / retornar

interface MathFunc{
    (x:number, y:number):number //toda função que implementar essa interface precisa ter dois parametros numeros e retornar um numero
}

const sub: MathFunc =  (x: number, y: number) =>{ // a interface é implementada tendo parametros e retornos de forma correta
    return x - y;
};

