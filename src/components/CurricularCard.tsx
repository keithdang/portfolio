import React from 'react';
import { CurricularProps} from '../lib/interfaces'
import '../App.css'

const CurricularCard:React.FC<{ obj: CurricularProps }> = (props) => {
    const description = () => {
        return <div className='curricularDescription'>
                    <ul>
            {props.obj.description.map(info=>{
                return <li>{info}</li>
            })}
        </ul>
        </div>
    }

    const mainInfo = () => {
        return <div className='curricularInfo'>
            <h3>{props.obj.role}</h3>
            <span>{props.obj.role}</span>
            <br/>
            <span>{props.obj.start.toDateString()}</span>
        </div>
    }

    return (
      <div className="container">
        {mainInfo()}
        {description()}
      </div>
  );
}

export default CurricularCard;
