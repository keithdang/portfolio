import React from 'react';
import {projects} from '../lib/data/Projects'
import ProjectCard from '../components/project/ProjectCard';
import Header from '../components/common/Header';

const Projects:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Projects"}}/>
            <div className="row">
            {projects.map(project=>
                <div className="col-xl-6 project-card">
                    <ProjectCard obj={project}/>
                </div>
            )}
            </div>
        </div>
    );
}

export default Projects;
