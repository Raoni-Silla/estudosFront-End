document.querySelector('input#gerar').addEventListener('click', function (){

  let numero = document.querySelector('input#numero')
  
  if(numero.value === "" || Number (numero.value) < 0){
    alert('o campo numero não pode ser nulo')
    return;
  }

  let numeroConvertido = Number(numero.value)

  let tabuada = document.getElementById('seltab')

  tabuada.innerHTML = ''
  

  for(let c = 0; c <= 10 ; c++){
    let item = document.createElement ('option') //ele cria um elemento option dentro do select
    item.text = ` ${numeroConvertido} x ${c} = ${numeroConvertido * c}` 
    tabuada.appendChild(item) //adiciona o filho no select
  }

})