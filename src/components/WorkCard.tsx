import React, { useState } from 'react';
import {WorkCardProps} from '../lib/interfaces'

const WorkCard:React.FC<{ obj: WorkCardProps }> = (props) => {
    const description = () => {
        return <div className='workInfo'>
                    <ul className='cardList'>
            {props.obj.description.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        </div>
    }

    const jobHeader = () => {
        return <div style={{maxWidth:400}}>
            <h3>{props.obj.role}</h3>
            <span>{props.obj.company}</span>
            <br/>
            <span>{props.obj.start.toDateString()}</span>
            <br/>
            <span>{props.obj.location}</span>
        </div>
    }

    return (
      <div className="container">
        {jobHeader()}
        {description()}
      </div>
  );
}

export default WorkCard;
