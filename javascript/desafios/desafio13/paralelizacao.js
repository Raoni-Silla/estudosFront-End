const buscarClima = (nomeCidade) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return reject(new Error("erro na busca"));
      }

      if (nomeCidade === "são paulo") {
        return resolve("como sempre, está garoando na terra da garoa");
      }

      return reject(new Error("não foi possivel encontrar a cidade"));
    }, 2000);
  });
};

const buscarTransito = (nomeCidade) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = false;
      if (erro) {
        return reject(new Error("erro na busca"));
      }

      if (nomeCidade === "são paulo") {
        return resolve("o transito esta insuportavel hoje");
      }

      return reject(new Error("não foi possivel encontrar a cidade"));
    }, 2000);
  });
};

Promise.all([buscarClima("são paulo"), buscarTransito("são paulo")])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });
