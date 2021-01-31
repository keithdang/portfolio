import React from 'react';
import { SkillProps} from '../lib/interfaces'
import '../App.css'

const SkillCard:React.FC<{ obj: SkillProps }> = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">
            {props.obj.category}
            </div>
            <ul className="list-group list-group-flush">
                {props.obj.list.map(item=>{
                    return <li className="list-group-item">{item}</li>
                })}
            </ul>
        </div>
  );
}

export default SkillCard;
