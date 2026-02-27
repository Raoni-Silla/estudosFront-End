document.querySelector("input#adicionar").addEventListener("click", adicionar);

document.querySelector("input#finalizar").addEventListener("click", finalizar);

let array = [];

function adicionar() {
  let numero = document.querySelector("input#numero");
  let seltab = document.querySelector('select#seltab')
  if (numero.value === "") {
    alert("não é possivel adicionar um dado nulo");
    return;
  }
  let numeroConvertido = Number(numero.value);
  array.push(numeroConvertido);
  let item = document.createElement("option");
  item.text = ` NOVO NUMERO ADICIONADO = ${numeroConvertido}`;
  seltab.appendChild(item); //adiciona o filho no select
}

function finalizar() {
  let numero = document.querySelector("input#numero");
  let resultado = document.querySelector("p#resultado");
  resultado.innerHTML = "";
  if (array.length == 0) {
    alert("o vetor está vazio, impossivel calcular");
    return;
  }

  let soma = array[0];

  let maior = array[0];

  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    soma += array[i];
    if (array[i] > maior) {
      maior = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  }

  let media = soma / array.length;

  resultado.style.color = 'cyan'
  resultado.innerHTML = ` ao todo temos ${array.length} numeros cadastrados 
  <br> 
  o maior valor informado foi ${maior} 
  <br>
  o menor valor informado foi ${menor}
  <br>
  somando todos os valores temos ${soma}
  <br>
  com a media de ${media}`;
  array = [];
  let select = document.querySelector('select#seltab')
  select.innerHTML = ''
}
