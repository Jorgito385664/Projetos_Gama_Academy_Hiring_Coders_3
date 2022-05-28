"use strict";
let isActive;
isActive = true;
//-------------------------------------
function mapearStatusUsuario(status) {
    if (status) {
        return `Usuario está ativo`;
    }
    else {
        return `Usuário não está ativo`;
    }
}
mapearStatusUsuario(false);
