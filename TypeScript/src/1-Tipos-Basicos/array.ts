let gatos: string[] = [

    'lion', 
    'panthro'
];


gatos.push('Cheetara');

//-------------------------------------------------------

function exibeGatos(gatos: string[]){

    return `Os gatos são: ${gatos.join(' , ')}`;
}

console.log(exibeGatos(gatos));

