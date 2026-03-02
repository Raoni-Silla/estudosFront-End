const botao = document.querySelector('input.btn').addEventListener('click', function(evento){
    let nomeInput = document.querySelector('#name')
    let emailInput = document.querySelector('#email')
    evento.preventDefault() //impede o comportamento padrão do botao de enviar o formulario e recarregar a pagina

    const nomeValor = nomeInput.ariaValueMax;
    console.log("clicou")
})


 let nomeInput = document.querySelector('#name').addEventListener('change', function(e){
    console.log(e.target.value); //quando o valor do input mudar ele vai imprimir o novo valor pra mim
 })