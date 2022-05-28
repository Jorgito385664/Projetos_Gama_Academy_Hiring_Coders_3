class Matematica{
    
    soma(valorA, valorB){
        return valorA + valorB;
    }

    subtracao(valorA, valorB){
        return valorA - valorB;
    }

    multiplicacao(valorA, valorB){
        return valorA * valorB;
    }

    divisao(valorA, valorB){
        return valorA / valorB;
    }
}

var instanciaMatematica = new Matematica();
var valor1 = 10;
var valor2 = 2;

var resultadoSoma = instanciaMatematica.soma(valor1,valor2);
var resultadoSubtracao = instanciaMatematica.subtracao(valor1,valor2);
var resultadoMultiplicacao = instanciaMatematica.multiplicacao(valor1,valor2);
var resultadoDivisao = instanciaMatematica.divisao(valor1,valor2);


console.log("O resultado da soma entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma);
console.log("O resultado da subtracao entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSubtracao);
console.log("O resultado da multiplicação entre " + valor1 + " e " + valor2 + " é igual a " + resultadoMultiplicacao);
console.log("O resultado da divisão entre " + valor1 + " e " + valor2 + " é igual a " + resultadoDivisao);