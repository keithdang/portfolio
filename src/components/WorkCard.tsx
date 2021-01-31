import React from 'react';
import { fromTo } from '../lib/dateMod';
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
        return <div className='row workInfo'>
            <div className="col-md-5">
                <h3>{props.obj.role}</h3>
                <span>{props.obj.company}</span>
                <br/>
                <span>{fromTo(props.obj.start, props.obj.end)}</span>
                <br/>
                <span>{props.obj.location}</span>
            </div>
            {props.obj.media && <div className="col-md-7"> 
            <img className={props.obj.company !== 'Reflex Photonics' ? "image": "reflex"} src={props.obj.media} /></div>}
        </div>
    }

    return (
      <div>
        {jobHeader()}
        {description()}
      </div>
  );
}

export default WorkCard;
