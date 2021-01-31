import * as Module from '../interfaces';
import pokemonPhoto  from '../images/pokemonReact.png'
import quizwizPhoto  from '../images/quizwiz.png'
import tourneyPhoto  from '../images/tournamentBracket2.jpg'

const statchat: Module.ProjectCardProps = {
    title: 'Stat Chat',
    description: ['Was organizing an online forum for the dance community when I needed some kind of applicatino that can track the speaking times of participants so everyone gets a fair share',
    'User Interface to track the time of each person talking in a conversation'],
    stack: ['React, Redux, Chart.js','Typescript'],
    start: new Date(2020, 0, 5),
    end: new Date(2020, 0, 15),
    github: 'https://github.com/keithdang/stat-chat',
    media: {link: "https://www.youtube.com/embed/ZN3g0wVLlzM"}
};

const partmarks: Module.ProjectCardProps = {
    title: 'Part Marks',
    description: [
        'Dashboard for teachers and students to be able to create, register, and analyze classes', 
        'Roles instituted for appropriate use of application',
        'SHA256 Crypto-js Hashing for accounts to be safetly created and stored in a database',
        'Analytics include seeing classroom and grade statistics of averages, graphs and filtering accounts'
    ],
    stack: ['Backend: Node JS. Accounts, grades, class info stored in PostgreSQL as database',
    'Frontend: React Redux, React Bootstrap and Chart.js'],
    start: new Date(2020, 0, 5),
    end: new Date(2020, 0, 15),
    github: 'https://github.com/keithdang/partmarks',
    media: {link: "https://www.youtube.com/embed/ET8dlFerC-o"}
};

const quizwiz: Module.ProjectCardProps = {
    title: 'Full Stack Quiz Wiz',
    description: ['Users can sign in and participate in a quiz of their choice',
        'UI guides participants to select a category, complete the quiz, and then proceeded to have the results of their quiz shown along with results with respect to all other participants',
        'Google Auth for creation of users',
        'MongoDB for database of all the quiz contents and information on each user',
        'Chart Js to display graphical content of community'
    ],
    stack: [
        'Front End: React, Redux, Bootstrap, Chart Js',
        'Node JS, Express, Passport, MongoDB, Google Auth' 
    ],
    start: new Date(2018, 8, 12),
    end: new Date(2018, 8, 13),
    github: 'https://github.com/keithdang/quizWiz',
    media: {image: quizwizPhoto},
    adjustImage: 'projRectImageFit'
};

const pokemon: Module.ProjectCardProps = {
    title: 'Full Stack Pokemon Game',
    description: [
        'Updated previous pokemon game project into a web based application',
        'UI allows users to select a team of pokemon to battle and level up as they win games',
        'Google Auth so users can select and keep their pokemon within the players account',
        'Includes battle components such as healthpoints, moves, element types, damage points, dynamic texts',
        'Pokemon, moves, & users are stored in the back-end with MongoDB',
        'Versus computers that can autonomously determine the best attack to use based on general pokemon strategy'
    ],
    stack: ['React & Redux, Bootstrap, Materialize-Css',
        'Node.js, Express API, Passport.js, Google+ API, MongoDB & Mongoose'],
    start: new Date(2018,7,24),
    end: new Date(2018,7,28),
    github: 'https://github.com/keithdang/pokemonGame',
    media: {image: pokemonPhoto}
};

const schedulebuilder: Module.ProjectCardProps = {
    title: 'Recursive Schedule Builder',
    description: [
        'Users can select an array of courses to find all possibilities to determine which schedule fits best with them',
        'Used recursion to efficiently determine all possible combinations of courses',
        'Can unselect and reselect options',
        'Used react-week-calendar as template for UI. Adjusted and modified template for preferred and dynamic styling'
    ],
    stack: ['React, Bootstrap, react-week-calendar, Javascript'],
    start: new Date(2018,7,28),
    end: new Date(2018,7,30),
    github: 'https://github.com/keithdang/react-weekly-calendar',
    media: {link: "https://www.youtube.com/embed/HnY1VmZAW0s"}
};
const email: Module.ProjectCardProps = {
    title: 'Email Application',
    description: [
        'Send emails to multiple addresses using SendGrid API',
        'Blacklist components allows adding emails you don\'t want to have the ability to send',
        'Express validator for checking text inputs',
        'MongoDB for database to check upon banned users',
        'Node JS & express for handling http requests'
    ],
    stack: ['Html, NodeJs',
        'Express API, MongoDB & Mongoose, SendGrid API'],
    start: new Date(2018, 9, 22),
    end: new Date(2018, 9, 22),
    github: 'https://github.com/keithdang/emails',
    media: {link: "https://www.youtube.com/embed/96ThBSO8_Ug"}
};
const tournament: Module.ProjectCardProps = {
    title: 'Tournament Bracket Android & Web App',
    description: [
        'Wanted to create an app to help with dance competitions(and other forms) way of organizing an elimination tournament that is often used in the events I\'ve participated in.',
        'App can take in inputs and display in inputted order or randomized to which teams will then be displayed in a bracket style elimination torunament. UI allows user to keep elminating and proceed to continuous rounds until a winner is selected'
    ],
    stack: ['Web: Html, CSS, Javascript and Bootstrap',
        'Android: done using Java with Android Studios IDE'],
    start: new Date(2018, 11),
    media: {image: tourneyPhoto},
    adjustImage: 'projRectImageFit'
};

const audioledglasses: Module.ProjectCardProps = {
    title: 'Audio LED Glasses',
    description: [
        'Created 2 LED Matrices that can listen to audio as a music player visualization',
        'Create various patterns and animations such as frame by frame of still images to scrolling vertical or horizontal',
        'Done through soldering on a perfboard, using an IC counter, Arduino MIC for audio input, and Arduino Uno'
    ],
    start: new Date(2017, 8),
    media: {link: "https://www.youtube.com/embed/blUll83krOU"}
};

export const projects: Module.ProjectCardProps[] =[partmarks,statchat, quizwiz, pokemon, schedulebuilder, email, tournament, audioledglasses];
