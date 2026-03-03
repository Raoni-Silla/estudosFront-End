const loginUser = (email, password) => {
  setTimeout(() => {
    //essa função simula uma chamada para uma api
    //todo codigo aqui dentro é executado pós 1,5 segundos
    console.log("usuario logado");
    return email;
  }, 1500);
};


const usuario = loginUser ('user@mail.com', '123456')

console.log(usuario)

//undefined
//usuario logado
