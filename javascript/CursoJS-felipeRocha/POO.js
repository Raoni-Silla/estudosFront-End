class Person {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    getNome(){
        return this.nome
    }

    setNovoNome(nome){
        this.nome = nome
    }
}

const pessoa = new Person("joao", 15)

console.log(pessoa)

class animal {
    constructor(nome){
        this.nome = nome
    }
}

class cachorro extends animal { //herança mesma forma do java
    constructor(nome){
        super(nome)
    }
} //# torno um atributo privado em uma classe no js

