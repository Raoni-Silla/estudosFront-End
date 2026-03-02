const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector('.items')

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "por favor preencha todos os campos";
    errorMessage.classList = "error"; // coloco as classes de estilo que essa div de erro vai ter

    setTimeout(() => {
        errorMessage.textContent = ""
        errorMessage.classList = ""
    }, 3000) //a mensagem de erro vai sumir depois de 3 segundos
    return;
  }

  const li = document.createElement ('li') //crio uma linha

  li.classList = 'item'

  li.textContent = `nome: ${nameValue}, Email: ${emailValue}`

  items.appendChild(li) //consigo adicionar filhos ao elemento

  nameInput.value = ""
  emailInput.value = ""
});
