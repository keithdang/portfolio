import React from 'react';
import {hello, partmarks} from '../lib/data/Projects'
import ProjectCard from '../components/ProjectCard';
import * as Module from '../lib/interfaces';
import '../App.css'

const Projects:React.FC=()=> {
    var projects:Module.ProjectCardProps[]=[partmarks,partmarks,hello]

    return (
        <div className="container">
            {projects.map(project=>
                <div className="col-md-6 projectCard">
                    <ProjectCard obj={project}/>
                </div>
            )}
        </div>
    );
}

export default Projects;
