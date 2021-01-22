import * as Module from '../interfaces';

export const hello: Module.ProjectCardProps = {
    title: 'Stat Chat',
    description: ['Hello', 'World'],
    stack: ['React','Typescript'],
    start: new Date(2020, 0, 5),
    end: new Date(2020, 0, 15),
    github: 'https://github.com/keithdang/stat-chat',
    members: 1
};

export const partmarks: Module.ProjectCardProps = {
    title: 'Part Marks',
    description: [
        'A School Portal for teachers and students to be able to create, register, and analyze classes', 
        'Roles instituted for appropriate use of application',
        'SHA256 Crypto-js Hashing for accounts to be safetly created and stored in a database',
        'Analytics include seeing classroom and grade statistics of averages, graphs and filtering accounts'
    ],
    stack: ['Backend: Node JS. Accounts, grades, class info stored in PostgreSQL as database',
    'Frontend: React Redux, React Bootstrap and Chart.js'],
    start: new Date(2020, 0, 5),
    end: new Date(2020, 0, 15),
    github: 'https://github.com/keithdang/partmarks',
    members: 1
};