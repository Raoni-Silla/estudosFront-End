//type
//é um objeto que define quais propriedades esse objeto vai ter e seus respectivos tipos
type User = {
  firstName: string;
  lastName: string;
  age: number;
};

//aqui eu instancio o objeto usuario
const user: User = {
  firstName: "jonh",
  lastName: "marston",
  age: 12,
};

//unions

type autor = {
  livros: string[];
};

/* let author: autor & User = {
digo que a variavel autor vai ter o tipo da classe autor e tambem vai ter os atributos de usuario
}; */

//interfaces
//parecido com o type, mas tem alguns metodos a mais
interface interfaceUsuario {
  nome: string;
}

const interfaces: interfaceUsuario = {
  nome: "ola",
};

//posso definir que uma propriedade do usuario vai ser uma função
type Animal = {
  nome: string;
  registro(): string;
};

let animal: Animal = {
  nome: "macaco",
  registro() {
    return "logged";
  },
};

//vamos ver classes

interface IPessoa {
  id: number;
  namePerson: string;
  age: number;
  sayMyName(): string;
}

class Pessoa implements IPessoa {
  id: number;
  namePerson: string;
  age: number;

  constructor(id: number, namePerson: string, age: number) {
    this.id = id;
    this.namePerson = namePerson;
    this.age = age;
  }

  sayMyName(): string {
    return this.namePerson;
  }
}

const pessoaNova = new Pessoa(1, "carlos", 21);


/*
temos readonly, que deixa o valor ser modificado apenas na criação do objeto no construtor
temos protected que não da pra acessar o atributo fora da classe, apenas em subclasses
temos as privates, só pode ser acessada dentro da classe
*/
