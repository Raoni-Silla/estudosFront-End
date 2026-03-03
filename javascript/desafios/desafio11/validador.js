function verificarSaldo(nome) {
  return new Promise((resolve, reject) => {
    const erro = true;
    setTimeout(() => {
      if (erro) {
        return reject(new Error("detectamos um erro"));
      }
      console.log("operação foi um sucesso");
      resolve(nome);
    }, 1500);
  });
}

verificarSaldo("carlos")
  .then((nomeUsuario) => {
    console.log(nomeUsuario);
  })
  .catch((erro) => {
    console.log(erro);
  });
