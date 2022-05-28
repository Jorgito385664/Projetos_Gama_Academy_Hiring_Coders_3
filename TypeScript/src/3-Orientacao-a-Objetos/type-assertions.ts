type JogoAssertion = {
    nome: string;
    descricao: string;
}

let game = <JogoAssertion> {}; // ou let game = {} as JogoAssertion

game.nome = 'GTA 3';
game.descricao = 'Rockstar Games'