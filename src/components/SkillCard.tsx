import React from 'react';
import { SkillProps} from '../lib/interfaces'
import '../App.css'

const SkillCard:React.FC<{ obj: SkillProps }> = (props) => {
    return (
        <table className="table">
            <thead>
                <th scope="col">{props.obj.category}</th>
            </thead>
            <tbody>
            {props.obj.list.map(item=>{
                return <tr><td>{item}</td></tr>
            })}
            </tbody>
      </table>
  );
}

export default SkillCard;
