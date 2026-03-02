const aluno = {
  name: "felipe",
  age: 17,
  escolaridade: "ensino Medio",
  hobbies: ["anime", "futebol", "ler"],
  dog: { name: "simba", age: 4 }, //posso por um objeto dentro de outro objeto tambem
};

const alunoJSON = JSON.stringify(aluno) //quando mandar algo pra um back end sempre vamos dar esse comando
const alunoString = JSON.parse(alunoJSON) //converte de json em um dado js que podemos manipular



