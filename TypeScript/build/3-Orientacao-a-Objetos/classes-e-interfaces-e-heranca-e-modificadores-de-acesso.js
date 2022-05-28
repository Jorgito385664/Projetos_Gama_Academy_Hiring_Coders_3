"use strict";
//classes e interfaces e heranca e modificadores de acesso
// classes e funções
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }
    static queHorasSao() {
        return Date();
    }
}
const jogador = new Player('Jorge', 29, 'Nascar 15');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());
// static
// private, protected, public
class Jogo {
    constructor(nomeDoJogo) {
        this.nomeDoJogo = nomeDoJogo;
    }
    dizerONome() {
        return `O nome do jogo é ${this.nomeDoJogo}`;
    }
}
class JogoComDescricao extends Jogo {
    constructor(nomeDoJogo, descricao) {
        super(nomeDoJogo);
        this.descricao = descricao;
    }
}
const jogo = new JogoComDescricao('GTA San Andreas', 'Melhor jogo da franquia GTA');
console.log(jogo.dizerONome());
// extends
// interfaces
// implements
