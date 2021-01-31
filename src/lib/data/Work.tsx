import * as Module from '../interfaces';
import {kanata, montreal, waterloo} from './General';
import Oracle from '../images/oracleLogo.jpg';
import FixMeStick from '../images/fixmestick.jpg';
import Nokia from '../images/nokia.jpg';
import Reflex from '../images/reflexPhotonics.jpg';

export const oracle: Module.WorkCardProps = {
    company: 'Oracle',
    role: 'Software Developer',
    description: [
        'Dev for Netsuite\'s Subscription Management & Order To Cash',
        'First Junior Developer to lead a project in Waterloo company branch. Devised & implemented proration feature in subscription',
        'Lead team & won Netsuite Oracle Waterloo Hackathon(2019). Created external UI that analyzes queries in real time of Netsuite application to assess metrics such as longest & most repeated sqls. I created the query deconstructor and analyzer',
        'Created SPA for pricing module',
        'Java, Kotlin, SQL, Javascript'
    ],
    start: new Date(2018, 10),
    end: new Date(),
    location: waterloo,
    media: Oracle
}

export const fixmestick: Module.WorkCardProps = {
    company: 'FixMeStick',
    role: 'Software Developer',
    description: ['Agile Developement of FixMeStick\'s Windows and Linux Application',
        'C++ application to resolve bugs and improve performance dealing with Encryption, Booting of application, Device compatibility and more using Object Oriented Concepts',
        'Front end improvements through Html, CSS, Javascript, and Bootstrap',
        'Automated retreival and diagnostics of logs and information of FMS users. Automated scripts in javascript, nodejs, bash'
    ],
    start: new Date(2017, 5),
    end: new Date(2018, 4),
    location: montreal,
    media: FixMeStick
}

export const nokia: Module.WorkCardProps = {
    company: 'Nokia',
    role: 'IPD Hardware Support Engineering Intern',
    description: ['Hardware verification including high speed signal integrity analysis on the latest prototype H/W designs using a variety of test gear such as oscilloscopes, network analyzers, and telecom interface test platforms',
        'Worked closely with production engineers to assist in improving prototype design and series production',
        'Troubleshooting and rework on PCBs through soldering and constructing circuits to interact with the prototypes',
        'Thermal analysis, stress testing, frequency response, used Allegro Board Viewing program'
    ],
    start: new Date(2015, 4),
    end: new Date(2015, 7),
    location: kanata,
    media: Nokia
}

export const reflex: Module.WorkCardProps = {
    company: 'Reflex Photonics',
    role: 'Hardware Engineering Intern',
    description: ['Optical transceivers testing and characterization, Eval board and test fixture design, test automation, and design transfer to manufacturing',
        'Actively involved in all aspects of the product development lifecycle of multimode short-range optical transceivers used for high speed data transmission',
        'Quality Assurance and Tests include BER, Sensitivity(using attenuators ), and TX and RX Eye diagrams all under various temperatures'
    ],
    start: new Date(2017, 5),
    end: new Date(2018, 4),
    location: montreal,
    media: Reflex
}
export const work: Module.WorkCardProps[] = [oracle, fixmestick, nokia, reflex];