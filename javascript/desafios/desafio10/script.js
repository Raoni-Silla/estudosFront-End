const submitButton = document.querySelector("input#submit-button");
const nomeInput = document.querySelector("#nome");
const distanciaInput = document.querySelector("#distancia");
const complexidade = document.querySelector("#complexidade");
const errorMessage = document.querySelector(".errorMessage");
const resultado = document.querySelector(".resultado")

submitButton.addEventListener("click", processamento);

function validarInput(avaliando) {
  if (avaliando === "") {
    errorMessage.textContent = "Por favor preencha todos os campos";
    errorMessage.classList = "error";
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return false;
  } else return true;
}

function processamento() {
  isValidNome = validarInput(nomeInput.value);
  isValidDistancia = validarInput(distanciaInput.value);
  const valorBase = 50;

  if (isValidNome && isValidDistancia) {
    let distanciaConvertida = Number(distanciaInput.value);

    if (distanciaConvertida === 0) {
      errorMessage.textContent = "a distância não pode ser 0";
      errorMessage.classList = "error";
      setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.classList = "";
      }, 3000);
      return;
    }

    let custoDeslocamentoFuncao = (distancia) => {
      return distancia * 2.5;
    };

    let custoDeslocamento = custoDeslocamentoFuncao(distanciaConvertida);

    let valorTotal = valorBase * Number(complexidade.value) + custoDeslocamento;

    let valorServicoPuro = valorBase * Number(complexidade.value);

    valorTotalFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorTotal)

    if(valorServicoPuro > custoDeslocamento){
        resultado.classList = 'resultado-card'
        resultado.style.borderLeft = '5px solid green'
        resultado.innerHTML = `
        <h2>Resumo do Orçamento (Lucro!!)</h2>
        <p><strong>Serviço :</strong> ${nomeInput.value} </p>
        <br>
        <p><strong>distancia (KM)</strong>: ${distanciaConvertida}</p>
        <br>
        <p><strong>Complexidade:</strong> ${complexidade.value}</p>
        <br>
        <p><strong>custo Deslocamento R$: </strong> ${custoDeslocamento}</p>
        <br>
        <p><strong>Calculo:</strong> (${valorBase} x ${ complexidade.value}) + ${custoDeslocamento} = <strong>${(valorBase * complexidade.value) + custoDeslocamento}</strong> </p>       
        `
    }else{
          resultado.classList = 'resultado-card'
        resultado.style.borderLeft = '5px solid red'
        resultado.innerHTML = `
        <h2>Resumo do Orçamento (Prejuizo)</h2>
        <p><strong>Serviço :</strong> ${nomeInput.value} </p>
        <br>
        <p><strong>distancia (KM)</strong>: ${distanciaConvertida}</p>
        <br>
        <p><strong>Complexidade:</strong> ${complexidade.value}</p>
        <br>
        <p><strong>custo Deslocamento R$: </strong> ${custoDeslocamento}</p>
        <br>
        <p><strong>Calculo:</strong> (${valorBase} x ${ complexidade.value}) + ${custoDeslocamento} = <strong>${(valorBase * complexidade.value) + custoDeslocamento}</strong> </p>       
        `
    }

  } else {
    return;
  }
}
