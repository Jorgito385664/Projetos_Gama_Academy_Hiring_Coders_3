let isActive : boolean;

isActive = true;

//-------------------------------------

function mapearStatusUsuario(status:boolean){
    if(status){
        return `Usuario está ativo`;
    }else{
        return `Usuário não está ativo`;
    }
}

mapearStatusUsuario(false);