document.querySelector("input#calcular").addEventListener("click", calcular);

function calcular() {
  let anoNascimento = document.querySelector("input#ano");
  let masculino = document.querySelector("input#mas");
  let feminino = document.querySelector('input#fem')
  let img = document.querySelector("img#img");
  let data = new Date();
  let ano = data.getFullYear();
  let resposta = document.querySelector("p#resposta");
  let sexo   

    if (Number(anoNascimento.value) == 0){
        alert('digite sua data de nascimento')
        return;
    }else if(Number(anoNascimento.value) == data.getFullYear()){
        alert('o ano de nascimento nao pode ser o ano atual')
        return;
    }else if (Number(anoNascimento.value) < 1900){
        alert('insira uma data valida')
        return;
    }

  let idade =  ano - Number(anoNascimento.value);

  if (masculino.checked){
    sexo = masculino.value
  }else if (feminino.checked){
    sexo = feminino.value
  }else{
    alert('selecione o seu sexo')
    return;
  }



  if ((sexo === "m" || sexo === "f") && idade <= 3) {
    img.src = "img/bebeCortado.jpg";
    resposta.innerHTML = "Você é um bebê, cai fora daqui 😅";
  } else if ((sexo === "m" || sexo === "f") && idade >= 4 && idade <= 11) {
    if (sexo === "m") {
      img.src = "img/meninoCortado.jpg";
      resposta.innerHTML = `Você é um menino (${idade} anos)`;
    } else {
      img.src = "img/meninaCortada.jpg";
      resposta.innerHTML = `Você é uma menina (${idade} anos)`;
    }
  } else if ((sexo === "m" || sexo === "f") && idade >= 12 && idade <= 17) {
    if (sexo === "m") {
      img.src = "img/adolescenteCortado.jpg";
      resposta.innerHTML = `Você é um adolescente (${idade} anos)`;
    } else {
      img.src = "img/adolescenteMulherCortada.jpg";
      resposta.innerHTML = `Você é uma adolescente (${idade} anos)`;
    }
  } else if ((sexo === "m" || sexo === "f") && idade >= 18 && idade <= 59) {
    if (sexo === "m") {
      img.src = "img/homemCortado.jpg";
      resposta.innerHTML = `Você é um adulto (${idade} anos)`;
    } else {
      img.src = "img/mulherCortada.jpg";
      resposta.innerHTML = `Você é uma adulta (${idade} anos)`;
    }
  } else if ((sexo === "m" || sexo === "f") && idade >= 60) {
    if (sexo === "m") {
      img.src = "img/idosoCortado.jpg";
      resposta.innerHTML = `Você é um idoso (${idade} anos)`;
    } else {
      img.src = "img/idosaCortada.jpg";
      resposta.innerHTML = `Você é uma idosa (${idade} anos)`;
    }
  }
}
