import React from 'react';
import { SchoolProjectProps} from '../../lib/interfaces'
import '../../App.css'

const Project:React.FC<{ obj: SchoolProjectProps }> = (props) => {
    const description = () => {
        return <div className='curricularDescription'>
                    
        </div>
    }

    return (
      <div className="container curricularDescription">
        <h3>{props.obj.title}</h3>
            <span>{props.obj.course}</span><br/>
            <span>{props.obj.start.toDateString()}</span><br/>
            <span>{props.obj.members > 1 ? `Group Project- Members: ${props.obj.members}`: 'Independent'}</span><br/>
            {props.obj.description.map(info=>{
                return <span>{info}</span>
            })}
            <h5>Contributions</h5>
            <span>{props.obj.contribution}</span><br/>
      </div>
  );
}

export default Project;
