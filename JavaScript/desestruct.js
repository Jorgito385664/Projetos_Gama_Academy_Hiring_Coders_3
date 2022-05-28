const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Gabriel',
    idade: 29,
    profissao: 'Estudante'
};

console.log(pessoa);

let { nome, sobrenome, idade, profissao} = pessoa;

console.log(nome, idade, profissao);