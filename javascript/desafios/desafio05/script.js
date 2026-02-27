function carregar() {
  let msg = document.querySelector("div#msg");
  let img = document.querySelector("img#img");
  let section = document.querySelector("section#section");
  let titulo = document.querySelector("h1.horaPrincipal");
  let data = new Date(); /* date é um objeto que nos ajuda a pegar data,horas,dias,minutos,anos e etc */
  let hora = data.getHours();
  msg.innerHTML = `agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "img/manha.jpg";
    titulo.style.color = "cyan";
    titulo.innerHTML = "<h3> Bom dia </h3>";
  } else if (hora >= 12 && hora < 18) {
    // boa tarde
    titulo.innerHTML = "<h3> Boa tarde</h3>";
    img.src = "img/tarde.jpg";
    titulo.style.color = "purple";
    section.style.boxShadow = "2px 3px 20px purple";
  } else {
    //boa noite
    img.src = "img/noite.jpg";
    titulo.style.color = "blue";
    titulo.innerHTML = "<h3> Boa noite</h3>";
    section.style.boxShadow = "2px 3px 20px blue";
  }
}
