import * as Module from '../interfaces';

export const soulbotics: Module.DanceCardProps = {
    event: 'SBK Animation Battle',
    info: '350+ dancers battled internationally',
    format: '1v1 Animation',
    date: new Date(2020, 0),
    placement: 'Top 32',
    location: 'Online, International'
};

export const topopping11: Module.DanceCardProps = {
    event: 'Toronto Popping Vol. 11',
    info: '28 dancers',
    format: '1v1 Animation',
    date: new Date(2019, 9),
    placement: '1st Place',
    location: 'Toronto, ON'
};

export const vsdf: Module.DanceCardProps = {
    event: 'Vancouver Street Dance Festival',
    placement: 'Quarter Finalist',
    info: '75+ dancers',
    format: '1v1 Popping',
    date: new Date(2018, 7),
    location: 'Vancouver, BC'
};

export const parksnwreck: Module.DanceCardProps = {
    event: 'Parks N\' Wreck Popping',
    placement: 'Finalist',
    info: '24+ dancers',
    format: '2v2 Popping',
    date: new Date(2018, 8),
    location: 'Toronto, ON'
};

export const events: Module.DanceCardProps[]= [soulbotics, topopping11, parksnwreck, vsdf]