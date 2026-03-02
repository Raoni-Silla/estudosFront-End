const aluno = {
  name: "felipe",
  age: 17,
  escolaridade: "ensino Medio",
  hobbies: ["anime", "futebol", "ler"],
  dog: { name: "simba", age: 4 }, //posso por um objeto dentro de outro objeto tambem
};

/*const nome = aluno.name
const idade = aluno.age
const escolaridade = aluno.escolaridade
const hobbies = aluno.hobbies*/

const hobbie = aluno.hobbys[1];

//descrostuctor

const { name: nomeAluno, age, escolaridade, hobbies } = aluno; //consigo acessar as propriedades desse person e colocar dentro das respectivas variaveis
console.log(nomeAluno);

aluno.dog = "simba"; //consigo adicionar atributos no meu objeto

const toDos = [
  {
    id: 1,
    descricao: "estudar programação",
    isCompleto: false,
  },
  {
    id: 2,
    descricao: "ler",
    isCompleto: true,
  },
  {
    id: 3,
    descricao: "Treinar",
    isCompleto: true,
  },
]; //uma lista de objetos é oque mais vamos ver no dia a dia

console.log(toDos[2].descricao);
