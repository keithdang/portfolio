import React, { useState } from 'react';
import { fromTo, monthYear } from '../lib/dateMod';
import {ButtonProps, ProjectCardProps} from '../lib/interfaces'
import PanelButton from './PanelButton';

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
    enum ButtonStates {
        PROJECT = 'Project',
        DESCRIPTION = 'Desc.',
        LANGUAGES = 'Languages'
    }

    var buttonProp: ButtonProps[] = [
        {name: ButtonStates.DESCRIPTION},
        {name: ButtonStates.PROJECT,hoverEnter:ButtonStates.PROJECT,hoverLeave:ButtonStates.DESCRIPTION},
    ]

    if(props.obj.stack){
        buttonProp.push({name: ButtonStates.LANGUAGES,hoverEnter:ButtonStates.LANGUAGES,hoverLeave:ButtonStates.DESCRIPTION})
    }

    const [cardState, setCardState] =  useState<string>(ButtonStates.DESCRIPTION);

    const info = () => {
        return <div className='projectInfo'>
            <span>{(props.obj.members && props.obj.members > 1) ? `Group Project- Members: ${props.obj.members}`: 'Independent'}</span><br/>
            <span>{props.obj.end ? fromTo(props.obj.start, props.obj.end): monthYear(props.obj.start)}</span>
            <ul className='cardList'>
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
            case ButtonStates.LANGUAGES:
                return languages()      
            case ButtonStates.PROJECT:
                return <span>Project</span>
            case ButtonStates.DESCRIPTION:
                return info()
        }
    }

    return (
      <div className="container">
        <h3>{props.obj.title}</h3>
        {<PanelButton obj={buttonProp} thefunc={setCardState}/>}
        <br/>
        {displayState()}
      </div>
  );
}

export default ProjectCard;
