document.querySelector("input#contar").addEventListener("click", function () {
  let inicio = document.querySelector("input#inicio");
  if (inicio.value.trim() === "") {
    console.log("O campo inicio esta está vazio ou só tem espaços!");
    return;
  }
  let fim = document.querySelector("input#fim");
  if (fim.value.trim() === "") {
    console.log("O campo inicio esta está vazio ou só tem espaços!");
    return;
  }
  let passo = document.querySelector("input#passo");
  if (passo.value.trim() === "") {
    console.log("O campo inicio esta está vazio ou só tem espaços!");
    return;
  } else if (Number(passo.value) <= 0) {
    alert("passo 0, considerando o valor como 1");
    passo.value = 1;
  }
  let resposta = document.querySelector("p#resposta");

  let inicioNumber = Number(inicio.value);
  let fimNumber = Number(fim.value);
  let passoNumber = Number(passo.value);

  resposta.innerHTML = "";

  if (fimNumber > inicioNumber) {
    for (inicioNumber; fimNumber >= inicioNumber; inicioNumber += passoNumber) {
      resposta.innerHTML += `${inicioNumber} 👉`;
    }
  }else{
    for (inicioNumber; inicioNumber >= fimNumber; inicioNumber -= passoNumber) {
    resposta.innerHTML += `${inicioNumber} 👉`;
  }
  }

  resposta.innerHTML += "🏁";
});
