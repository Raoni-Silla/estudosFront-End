const loginUser = (email, password, callback) => {
  setTimeout(() => {
    //essa função simula uma chamada para uma api
    //todo codigo aqui dentro é executado pós 1,5 segundos
    console.log("usuario logado");
    callback (email) //entra no lugar do return
  }, 1500);
};

const usuario = loginUser ('user@mail.com', '123456', () => {
    //diz pro js que eu quero executar essa função callback em algum momento mais tarde, e esse momento vai ser quando o usuario tiver sido logado
    console.log(usuario)
})
