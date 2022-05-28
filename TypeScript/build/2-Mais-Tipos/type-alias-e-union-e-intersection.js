"use strict";
const jorge = {
    name: 'jorge',
    lastname: 'gabriel',
    dateOfBirth: '08/04/1993'
};
function logMessage(message, level) {
    console.log(`${level} - ${message}`);
}
logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem info', 'error');
logMessage('Uma mensagem info', 'debug');
const userWithProfile = {
    name: 'jorge',
    lastname: 'gabriel',
    dateOfBirth: '08/04/1993',
    bio: 'Olá, meu nome é jorge',
    interests: ['musica', 'fotografia', 'animais']
};
