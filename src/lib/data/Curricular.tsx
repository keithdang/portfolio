import * as Module from '../interfaces';
import mssdPhoto from '../images/mssd.jpg';
import eusPhoto from '../images/eusjc.png';
import ewbPhoto from '../images/ewb.jpeg';

export const mssdPhotoOb: Module.Photo = {
    image: mssdPhoto
}
export const mssd: Module.CurricularProps ={
    club: 'McGill Student Street Dancers',
    role: 'President',
    description: ['Through new marketing tactics, I increased revenue made from dance classes by more than 100% (up to 50 students per class)',
    'Organized events such as a dance competition with over 80 participants and +200 spectators, teach weekly workshops, collaborate and network with professional dancers in Canada',
    'Active member from 2012-2015 and then became Vice president of Communications and Events'],
    start: new Date(2016,8),
    end: new Date(2017,3),
    media: {image: mssdPhoto}
}

export const eus: Module.CurricularProps ={
    club: 'Engineer Undergraduate Society Junior Council',
    role: 'Vice President of Administration',
    description: ['Representing junior engineering students through organizing academic and social events'],
    start: new Date(2013,8),
    end: new Date(2014,3),
    media: {image: eusPhoto}
}

export const ewb: Module.CurricularProps ={
    club: 'Engineers Without Borders',
    role: 'Member',
    description: ['Organized, volunteered, and participated in multiple fundraising events such as barbeques, RunToEnd Poverty and more'],
    start: new Date(2013,8),
    end: new Date(2014,3),
    media: {image: ewbPhoto}
}

export const curriculars: Module.CurricularProps[] = [mssd,eus,ewb];