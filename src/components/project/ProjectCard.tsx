import React, { useState } from 'react';
import { fromTo, monthYear } from '../../lib/dateMod';
import {ButtonProps, isPhoto, ProjectCardProps} from '../../lib/interfaces'
import PanelButton from '../common/PanelButton';
import './Project.css'

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
        return <div>
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
        return <div>
        {props.obj.stack && <ul className='cardList'>
            {props.obj.stack.map(info=>{
                return <li>{info}</li>
            })}
        </ul>}
    </div>
    }

    const media = () => {
        return isPhoto(props.obj.media) ? 
            <img className={props.obj.adjustImage ? props.obj.adjustImage : "proj-rect-image"} src={props.obj.media.image} /> :
            <iframe className="proj-vid" src={props.obj.media.link} />
            
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
      <div className="card blue-grey text-white mb-3">
        <div className="card-header">
            <div className="row">
                {props.obj.title.length > 20 ?
                <h5 className="col-md-6">{props.obj.title}</h5> :
                <h3 className="col-md-6">{props.obj.title}</h3>
            }
                
                <div className="col-md-6 rightAlign">
                    <PanelButton obj={buttonProp} thefunc={setCardState}/>
                </div>
            </div>
        </div>
        
        <div className="card-body all-proj-info">
            {displayState()}
        </div>
      </div>
  );
}

export default ProjectCard;
