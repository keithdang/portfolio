import React from 'react';
import { SchoolProjectProps} from '../../lib/interfaces'
import '../../App.css'
import { fromTo, monthYear } from '../../lib/dateMod';

const Project:React.FC<{ obj: SchoolProjectProps }> = (props) => {
    return (
      <div className="curricularDescription">
        <h3>{props.obj.title}</h3>
            <span>{props.obj.course}</span><br/>
            <span>{props.obj.end ? fromTo(props.obj.start, props.obj.end): monthYear(props.obj.start)}</span><br/>
            <span>{(props.obj.members && props.obj.members > 1) ? `Members: ${props.obj.members}`: 'Independent'}</span><br/>
            {props.obj.description.map(info=>{
                return <span>{info}</span>
            })}
            <h5>Contributions</h5>
            <span>{props.obj.contribution}</span><br/>
      </div>
  );
}

export default Project;
