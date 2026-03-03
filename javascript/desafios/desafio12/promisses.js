function searchStudent(id) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return rejected(new Error("deu erro ai"));
      }

      if (id === 10) {
        return resolve("victor");
      }

      return rejected(new Error("Aluno não encontrado"));
    }, 1000);
  });
}

function searchNote(nome) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return rejected(new Error("deu erro ai"));
      }
      if (nome === "victor") {
        return resolve(9.5);
      }
      return rejected(new Error("Nota não lançada"));
    }, 1000);
  });
}


let id = 10

searchStudent(id).then((aluno) =>{
    console.log('aluno:' + aluno);
    return searchNote (aluno);
}).then((nota) =>{
    console.log('nota desse aluno é ' + nota)
}).catch((erro) =>{
    console.log(erro)
})