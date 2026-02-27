document.querySelector("input#contar").addEventListener("click", function () {
  let inicio = document.querySelector("input#inicio");
  let resposta = document.querySelector("p#resposta");

  if (inicio.value.trim() === "") {
    resposta.innerHTML = "O campo início está vazio ou só tem espaços!";
    return;
  }

  let fim = document.querySelector("input#fim");
  if (fim.value.trim() === "") {
    resposta.innerHTML = "O campo fim está vazio ou só tem espaços!";
    return;
  }

  let passo = document.querySelector("input#passo");
  if (passo.value.trim() === "") {
    resposta.innerHTML = "O campo passo está vazio ou só tem espaços!";
    return;
  } else if (Number(passo.value) <= 0) {
    alert("passo 0, considerando o valor como 1");
    passo.value = 1;
  }

  let inicioNumber = Number(inicio.value);
  let fimNumber = Number(fim.value);
  let passoNumber = Number(passo.value);

  resposta.innerHTML = "";

  if(inicioNumber == fimNumber){
    resposta.innerHTML = "não da pra contar os numeros entre dois numeros iguais";
    return;
  }
  if (fimNumber > inicioNumber) {
    for (inicioNumber; fimNumber >= inicioNumber; inicioNumber += passoNumber) {
      resposta.innerHTML += `${inicioNumber} 👉`;
    }
  } else {
    for (inicioNumber; inicioNumber >= fimNumber; inicioNumber -= passoNumber) {
      resposta.innerHTML += `${inicioNumber} 👉`;
    }
  }

  resposta.innerHTML += "🏁";
});
