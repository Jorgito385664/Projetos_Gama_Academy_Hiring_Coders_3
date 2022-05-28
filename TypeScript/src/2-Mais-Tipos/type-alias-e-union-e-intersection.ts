type User = {
    name: string;
    lastname: string;
    dateOfBirth: string;
    age?: number;
}

const jorge: User = {
    name: 'jorge',
    lastname: 'gabriel',
    dateOfBirth: '08/04/1993'
}
//----------------------------------------------------------------

// union types

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level:LogLevel ){
    console.log(`${level} - ${message}`);
}

logMessage('Uma mensagem info','info');
logMessage('Uma mensagem info','error');
logMessage('Uma mensagem info','debug');

//----------------------------------------------------------------

// intersection types

type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {
    name: 'jorge',
    lastname: 'gabriel',
    dateOfBirth: '08/04/1993',
    bio: 'Olá, meu nome é jorge',
    interests: ['musica', 'fotografia', 'animais']
}

//------------------------------------------------------

type ComposedProfile = User & {
    log: LogLevel;
}

