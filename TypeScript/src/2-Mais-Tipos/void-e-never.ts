function principal() : void{
    console.log('Hello World');
}

principal();

// se houver um return dentro da função principal, 
// a função deixará de ser void e passara a ter o retorno do tipo especificado (number, string, etc)


//-----------------------------------------------------------------

function funcaoQueNuncaRetorna(): never{
   throw new Error('ola')
}

const a = funcaoQueNuncaRetorna();

// never serve para laços de repetição infinitos
// ou funções que disparam erros