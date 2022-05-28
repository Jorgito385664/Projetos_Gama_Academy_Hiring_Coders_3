enum Permissoes{
    admin,
    editor, 
    comum
}

const usuario = {
    nivel: Permissoes.admin
}

console.log(usuario);

//------------------------------------------

enum Permissao{
    admin = 'ADMIN',
    editor = 'EDITOR', 
    comum = 'COMUM'
}

const user = {
    nivel: 'ADMIN'
}

console.log(user);