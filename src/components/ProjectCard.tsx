import React from 'react';
import {ProjectCardProps} from '../lib/interfaces'

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
  return (
      <div className="container">
        <h3>{props.obj.title}</h3>
        <span>{props.obj.members > 1 ? `Group Project- Members: ${props.obj.members}`: 'Independent'}</span>
        <h4>Info</h4>
        <ul>
            {props.obj.description.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        <h4>Languages</h4>
        <ul>
            {props.obj.stack.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        <a href={props.obj.github}>Go To Github</a>
      </div>
  );
}

export default ProjectCard;
