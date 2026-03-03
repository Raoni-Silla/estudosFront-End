const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    //essa função simula uma chamada para uma api
    //todo codigo aqui dentro é executado pós 1,5 segundos

    const error = true;

    if (error) {
      return onError(new Error("erro no login")); //segunda função callback
    }

    console.log("usuario logado");
    onSucess(email); //entra no lugar do return
  }, 1500);
};

const usuario = loginUser(
  "user@mail.com",
  "123456",
  (usuario) => {
    //diz pro js que eu quero executar essa função callback em algum momento mais tarde, e esse momento vai ser quando o usuario tiver sido logado
    console.log(usuario);
  },
  (error) => {
    console.log(error);
  },
);

//uma função é executada no sucesso e outra no erro
