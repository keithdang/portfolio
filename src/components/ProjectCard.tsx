import React, { useState } from 'react';
import { fromTo, monthYear } from '../lib/dateMod';
import {ButtonProps, isPhoto, ProjectCardProps} from '../lib/interfaces'
import PanelButton from './PanelButton';

const ProjectCard:React.FC<{ obj: ProjectCardProps }> = (props) => {
    enum ButtonStates {
        PROJECT = 'Project',
        DESCRIPTION = 'Desc.',
        LANGUAGES = 'Languages'
    }

    var buttonProp: ButtonProps[] = [
        {name: ButtonStates.PROJECT,hoverEnter:ButtonStates.PROJECT,},
        {name: ButtonStates.DESCRIPTION,hoverEnter:ButtonStates.DESCRIPTION},
    ]

    if(props.obj.stack){
        buttonProp.push({name: ButtonStates.LANGUAGES,hoverEnter:ButtonStates.LANGUAGES})
    }

    const [cardState, setCardState] =  useState<string>(ButtonStates.PROJECT);

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
        {props.obj.stack && <ul>
            {props.obj.stack.map(info=>{
                return <li>{info}</li>
            })}
        </ul>}
    </div>
    }

    const media = () => {
        return isPhoto(props.obj.media) ? 
            <img className={props.obj.adjustImage ? props.obj.adjustImage : "projRectImage"} src={props.obj.media.image} /> :
            <iframe className="projVid" src={props.obj.media.link} />
            
    }

    const displayState = () => {
        switch(cardState){
            case ButtonStates.LANGUAGES:
                return languages()      
            case ButtonStates.PROJECT:
                return media()
            case ButtonStates.DESCRIPTION:
                return info()
        }
    }

    return (
      <div>
        <h3>{props.obj.title}</h3>
        {<PanelButton obj={buttonProp} thefunc={setCardState}/>}
        <br/>
        <div className="allProjInfo">
            {displayState()}
        </div>
      </div>
  );
}

export default ProjectCard;
