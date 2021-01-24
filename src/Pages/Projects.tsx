import React from 'react';
import {projects} from '../lib/data/Projects'
import ProjectCard from '../components/ProjectCard';
import '../App.css'

const Projects:React.FC=()=> {
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
