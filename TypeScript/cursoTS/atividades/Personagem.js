//energia, vida, ataque, defesa nome
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = "";
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
var jade = new Personagem("jade", 100, 200, 15, 20);
var scorpion = new Personagem("scorpion", 200, 400, 50, 60);
