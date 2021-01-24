import * as Module from '../interfaces';
import {toronto, montreal, waterloo} from './General';

var onePopping='1v1 Popping';
var oneAll='1v1 All Styles';
var twoAll='2v2 All Styles';
var top8='Quarter Finalist';

export const soulbotics: Module.DanceCardProps = {
    event: 'Soulbotics Animation Battle',
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
    location: toronto
};

export const vsdf: Module.DanceCardProps = {
    event: 'Vancouver Street Dance Festival',
    placement: top8,
    info: '75+ dancers',
    format: onePopping,
    date: new Date(2018, 7),
    location: 'Vancouver, BC'
};

export const parksnwreck: Module.DanceCardProps = {
    event: 'Parks N\' Wreck Popping',
    placement: 'Finalist',
    info: '24+ dancers',
    format: '2v2 Popping',
    date: new Date(2018, 8),
    location: toronto
};

export const stackinstyles: Module.DanceCardProps = {
    event: 'Stackin Styles: The Foundation',
    placement: 'Top 10',
    info: '32 dancers from around the states & Canada. First international battle I qualified in',
    format: onePopping,
    date: new Date(2019, 8),
    location: 'Boston, MA'
};

export const canadaday: Module.DanceCardProps = {
    event: 'Canada Day Popping',
    info: 'Invitational Battle Guest',
    format: onePopping,
    date: new Date(2019, 5),
    location: toronto
};

export const events: Module.DanceCardProps[]= [soulbotics, topopping11, parksnwreck, vsdf, stackinstyles, canadaday]

export const tko: Module.DanceCardProps = {
    event: 'Toronto Knock Out',
    placement: 'Top 16',
    info: '25 dancers',
    format: oneAll,
    date: new Date(2020,4),
    location: 'Online'
};

export const topopping14: Module.DanceCardProps = {
    event: 'Toronto Popping Vol. 14',
    placement: 'Top 20',
    info: '40+ dancers',
    format: onePopping,
    date: new Date(2020,2),
    location: toronto
};

export const community: Module.DanceCardProps = {
    event: 'Community Waterloo',
    placement: 'Top 16',
    info: '75+ dancers',
    format: twoAll,
    date: new Date(2020,2),
    location: waterloo
};

export const lostIsFound: Module.DanceCardProps = {
    event: 'Lost Is Found',
    placement: 'Top 16',
    format: twoAll,
    date: new Date(2020,2),
    location: toronto
};

export const dareunion: Module.DanceCardProps = {
    event: 'Da Reunion',
    placement: top8,
    info: '30+ dancers',
    format: onePopping,
    date: new Date(),
    location: montreal
};

export const justfeelit: Module.DanceCardProps = {
    event: 'Just Feel It',
    placement: top8,
    format: onePopping,
    date: new Date(2017,4),
    location: toronto
};

export const flipdacoin: Module.DanceCardProps = {
    event: 'Flip Da Coin',
    placement: top8,
    format: onePopping,
    date: new Date(2017,4),
    location: toronto
};

export const nuitblanche: Module.DanceCardProps = {
    event: 'Nuit Blanche',
    placement: 'Top 16',
    format: oneAll,
    date: new Date(2015,11),
    location: montreal
};

export const heirthrone: Module.DanceCardProps = {
    event: 'Heir To The Throne',
    placement: 'Finalist',
    info: 'Student and their mentor pair up',
    format: twoAll,
    date: new Date(2015,3),
    location: montreal
};

export const additionalEvents: Module.DanceCardProps[]= [tko, topopping14,community,lostIsFound,dareunion, justfeelit, flipdacoin, nuitblanche, heirthrone]

export const jon: Module.TestimonialProps = {
    name: 'Anonymous',
    desc: 'Keith has an interesting way of breaking down movements and zoning in on the very mechanics of said movements. His take on Robotics and Animation is something that is easy to understand and apply.'
}

export const tamami: Module.TestimonialProps = {
    name: 'T. Gavrilovic',
    desc: 'This experience was so important for me. The basic philosophy of his style was born from his amazing experience and hard training. Keith\'s class gave me a new perspective on my dance. I would be so happy if I could incorporate some of your style into my dance.'
}

export const testimonials: Module.TestimonialProps[] = [tamami, jon];