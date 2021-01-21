import React from 'react';
import {ProjectCardProps} from '../lib/interfaces'

// interface ProjectCardProps {
//     title: string
//     description: string[]
//     stack: string[]
//     start: Date
//     end: Date
//     github?: string
//     evidence?: JSX.Element | string
//     members: number
// }

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
  return (
      <div className="container">
        <h3>{props.obj.title}</h3>
        <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
      </div>
  );
}

export default ProjectCard;
