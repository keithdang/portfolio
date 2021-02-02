import React from 'react';
import { SkillProps} from '../lib/interfaces'
import '../App.css'

const SkillCard:React.FC<{ obj: SkillProps }> = (props) => {
    return (
        <div className="card blue-grey mb-3">
            <div className="card-header text-white">
                <h4>{props.obj.category}</h4>
            </div>
            <ul className="list-group list-group-flush">
                {props.obj.list.map(item=>{
                    return <li className="list-group-item blue-grey text-white">{item}</li>
                })}
            </ul>
        </div>
  );
}

export default SkillCard;
