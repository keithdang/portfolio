import React from 'react';
import { isPhoto, SchoolProjectProps} from '../../lib/interfaces'
import '../../App.css'
import { fromTo, monthYear } from '../../lib/dateMod';

const Project:React.FC<{ obj: SchoolProjectProps }> = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className='card-header'>
                <div className="row">
                    <div className="col-md-6">
                    <h3>{props.obj.title}</h3>
                        <span>{props.obj.course}</span><br/>
                        <span>{props.obj.end ? fromTo(props.obj.start, props.obj.end): monthYear(props.obj.start)}</span><br/>
                        <span>{(props.obj.members && props.obj.members > 1) ? `Members: ${props.obj.members}`: 'Independent'}</span><br/>
                    </div>
                    <div className="col-md-6 rightAlign"> 
                        {isPhoto(props.obj.media) ? 
                        <img className={"squareImage"} src={props.obj.media.image} /> :
                        <iframe className="schoolProjVideo" src={props.obj.media.link} />
                    }
                    </div> 
                </div>
            </div>
            <div className='card-body'>
                {props.obj.description.map(info=>{
                    return <span>{info}</span>
                })}
                <br/>
                <br/>
                <h5>Contributions</h5>
                <span>{props.obj.contribution}</span><br/>
            </div>
        </div>
  );
}

export default Project;
