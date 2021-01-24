import React, { useState } from 'react';
import {ProjectCardProps} from '../lib/interfaces'

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
    const [cardState, setCardState] =  useState<string>("default");
    
    const info = () => {
        return <div className='projectInfo'>
            <span>{(props.obj.members && props.obj.members > 1) ? `Group Project- Members: ${props.obj.members}`: 'Independent'}</span>
            <h4>Info</h4>
        <ul>
            {props.obj.description.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        {props.obj.github && <a href={props.obj.github}>Go To Github</a>}
        </div>
    }

    const languages = () => {
        return <div className='projectInfo'>
        <h4>Languages</h4>
        {props.obj.stack && <ul>
            {props.obj.stack.map(info=>{
                return <li>{info}</li>
            })}
        </ul>}
    </div>
    }

    const displayState = () => {
        switch(cardState){
            case "languages":
                return languages()      
            case "info":
                return info()
            default:
                return <span>Project</span>
        }
    }
    return (
      <div className="container">
        <h3>{props.obj.title}</h3>
        {/* <br/> */}
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("default")}>Project</button>
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("info")}>Desc.</button>
            {props.obj.stack && <button type="button" className="btn btn-primary" onClick={()=>setCardState("languages")}>Languages</button>}
        </div>
        <br/>
        {displayState()}
      </div>
  );
}

export default ProjectCard;
