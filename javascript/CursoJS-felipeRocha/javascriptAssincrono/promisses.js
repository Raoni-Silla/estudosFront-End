//criar a promisse
const loginUserPromise = (email, senha) => {
  // 1. A função agora retorna o "Objeto Promise" 
  return new Promise((resolve, reject) => {
    // 2. O tempo de espera continua aqui dentro!
    setTimeout(() => {
      const error = false; // Simulando se deu erro ou não

      if (error) {
        // Em vez de chamar o parâmetro onError, chamamos o reject
        return reject(new Error("erro no login"));
      }

      console.log("usuario logado");
      // Em vez de chamar o parâmetro onSuccess, chamamos o resolve
      resolve(email);
    }, 1500);
  });
};

//consumir a promisse
loginUserPromisse("user@mail.com", "123")
  .then((user) => {
    console.log(user);
  })
  .catch((erro) => {
    console.log(erro);
  });
