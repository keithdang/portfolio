import * as Module from '../interfaces';
import dpmPhoto from '../images/dpmRobot.jpg'
const electromyography: Module.SchoolProjectProps = {
    title: 'Electromyography Music',
    description: ['Developed a device that uses non-invasive electromyography to visualize electrical signals passing through human limbs. Designing an analog circuit to amplifier, filter, and rectify signal from sensors on limb to a phone to read.'],
    start: new Date(2016, 0),
    end: new Date(2016, 11),
    members: 4,
    course: 'Design Project',
    contribution: 'I worked constructing the circuit. Other members worked on the phone app and simulations',
    media: {link: "https://www.youtube.com/embed/68mGnxzUVJA"}
};

const dpmbot: Module.SchoolProjectProps = {
    title: 'Autonomous Search & Rescue Robot',
    description: ['Created a robot to navigate around a course to find, detect, capture and carry a block to a safety zone. Covered full cycle engineering process: design, specifications, optimization, implementation, troubleshooting and refinement.'],
    start: new Date(2014, 0),
    end: new Date(2014, 3),
    members: 6,
    course: 'Design Principles & Methods',
    contribution: 'Timeline of the project consisted of two segments. The first half is in groups of 2 in which I programmed routines for autonomous navigation and path recognition using motion and light sensors. The second half is merging with other groups to form a group of 6 where I focused on the construction of the robot',
    media: {image: dpmPhoto}
};

export const projects:Module.SchoolProjectProps[] =[electromyography,dpmbot];