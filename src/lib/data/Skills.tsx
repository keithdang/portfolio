import * as Module from '../interfaces';

export const oopLang: Module.SkillProps = {
    category: 'Object Oriented Languages',
    list: ['Kotlin','Java','C++','Python']
}

export const frontEnd: Module.SkillProps = {
    category: 'Front End',
    list: ['React & Redux','Javascript', 'Html & Css','Bootstrap']
}

export const jsstuff: Module.SkillProps = {
    category: 'Javascript Stuff',
    list: ['Typescript','Node JS', 'Express','Jquery']
}

export const versionControl: Module.SkillProps = {
    category: 'Version Control Systems',
    list: ['Git','Perforce', 'Sourcetree', 'TortoiseHg']
}

export const ideEditor: Module.SkillProps = {
    category: 'IDEs',
    list: ['IDEA','VSCode','Android Studios','Eclipse']
}

export const dbms: Module.SkillProps = {
    category: 'DBMS',
    list: ['Oracle Database','PostgresSQL','MySQL']
}

export const api: Module.SkillProps = {
    category: 'API Related',
    list: ['Postman','Google: Authenticator & Maps','Stripe', 'SendGrid']
} 

export const nosql: Module.SkillProps = {
    category: 'NoSQL',
    list: ['MongoDB', 'Mongoose','MLab']
} 

export const rubiks: Module.SkillProps = {
    category: 'Rubik\'s Cube',
    list: ['35s ;)']
} 

export const skillList: Module.SkillProps[] = [oopLang, frontEnd, jsstuff,versionControl, ideEditor, api, dbms, nosql, rubiks]