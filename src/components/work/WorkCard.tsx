import React from 'react';
import { fromTo } from '../../lib/dateMod';
import {WorkCardProps} from '../../lib/interfaces'
import './Work.css'

const WorkCard:React.FC<{ obj: WorkCardProps }> = (props) => {
    const description = () => {
        return <div className='work-info card-body'>
                    <ul className='work-list'>
                        {props.obj.description.map(info=>{
                            return <li>{info}</li>
                        })}
                    </ul>
                </div>
    }

    const jobHeader = () => {
        return <div className='card-header work-header'>
            <div className="row work-row-header">
                <div className="col-md-6">
                    <h3>{props.obj.role}</h3>
                    <span>{props.obj.company}</span>
                    <br/>
                    <span>{fromTo(props.obj.start, props.obj.end)}</span>
                    <br/>
                    <span>{props.obj.location}</span>
                </div>
                {props.obj.media && <div className="col-md-6 rightAlign"> 
                    <img className={props.obj.styling} src={props.obj.media} />
                </div>}
            </div>
        </div>
    }

    return (
      <div className="card blue-grey text-white mb-3">
        {jobHeader()}
        {description()}
      </div>
  );
}

export default WorkCard;
