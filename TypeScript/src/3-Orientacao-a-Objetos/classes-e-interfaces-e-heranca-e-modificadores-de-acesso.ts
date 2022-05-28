//classes e interfaces e heranca e modificadores de acesso




// classes e funções

class Usuario{
    public nome;
    public idade;

    constructor(nome: string,idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario{

    public jogo;

    constructor(nome: string,idade: number,jogo: string){
        super(nome,idade);

        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `Estou jogando, no momento: ${this.jogo}`;
    }

    static queHorasSao(){
        return Date();
    }
}


const jogador = new Player('Jorge', 29, 'Nascar 15');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());


// private, protected, public
//public é acessível dentro e fora da classe
// protected é acessível apenas dentro da classe e subclasse onde o campo foi criado
// private é acessível apenas dentro da classe onde o campo foi criado 

interface IJogoComDescricao{
    //nomeDoJogo: string;
    //descricao: string;
    dizerONomeComDescricao(): string;
}

class Jogo{
    protected nomeDoJogo;
    
    constructor(nomeDoJogo: string){
        this.nomeDoJogo = nomeDoJogo;
    }

    dizerONome(){
        return `O nome do jogo é ${this.nomeDoJogo}`;
    }
}

class JogoComDescricao extends Jogo implements IJogoComDescricao {
    private descricao;

    constructor(nomeDoJogo: string, descricao: string){
        super(nomeDoJogo);

        this.descricao = descricao;
    }

    dizerONomeComDescricao(){
        return `O nome do jogo é ${this.nomeDoJogo} , ${this.descricao}`;
    }
}

const jogo = new JogoComDescricao('GTA San Andreas', 'Melhor jogo da franquia GTA');
console.log(jogo.dizerONome())


// extends




// interfaces





// implements
