import React, { useState } from 'react';
import {ProjectCardProps} from '../lib/interfaces'

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
    const [cardState, setCardState] =  useState<string>("default");
    
    const info = () => {
        return <div style={{maxWidth:400}}>
            <h4>Info</h4>
        <ul>
            {props.obj.description.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        <a href={props.obj.github}>Go To Github</a>
        </div>
    }

    const languages = () => {
        return <div>
        <h4>Languages</h4>
        <ul>
            {props.obj.stack.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
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
        <span>{props.obj.members > 1 ? `Group Project- Members: ${props.obj.members}`: 'Independent'}</span>
        <br/>
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("default")}>Project</button>
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("info")}>Desc.</button>
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("languages")}>Languages</button>
            {/* <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault();
                    window.open(props.obj.github);
                }}
            > Github</button> */}
        </div>
        <br/>
        {displayState()}
      </div>
  );
}

export default ProjectCard;
