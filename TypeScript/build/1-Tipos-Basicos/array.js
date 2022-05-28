"use strict";
let gatos = [
    'lion',
    'panthro'
];
gatos.push('Cheetara');
//-------------------------------------------------------
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(' , ')}`;
}
console.log(exibeGatos(gatos));
