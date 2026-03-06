//energia, vida, ataque, defesa nome
class Personagem {
  nome: string = "";
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;

  constructor(
    nome: string,
    energia: number,
    vida: number,
    ataque: number,
    defesa: number,
  ) {
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
}

let teclado = prompt();

let jade: Personagem = new Personagem("jade", 100, 200, 15, 20);
let scorpion: Personagem = new Personagem("scorpion", 200, 400, 50, 60);
