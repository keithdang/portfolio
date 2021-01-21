import React from 'react';
import {hello} from '../lib/data/Projects'
import ProjectCard from '../components/ProjectCard';

const Projects:React.FC=()=> {
  return (
    <ProjectCard obj={hello}/>
    //   <div className="container">
    //     <h3>Projects</h3>
    //     <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
    //     <ProjectCard obj={hello}/>
    //   </div>
  );
}

export default Projects;
