import React from 'react';
import { CurricularProps} from '../../lib/interfaces'
import { fromTo } from '../../lib/dateMod';
import './Education.css'

const CurricularCard:React.FC<{ obj: CurricularProps }> = (props) => {
    const description = () => {
        return <div className='card-body curricular-card'>
                    <ul className="curricular-list">
                     {props.obj.description.map(info=>{
                            return <li>{info}</li>
                        })}
                    </ul>
                </div>
    }

    const mainInfo = () => {
        return <div className='card-header curricular-header'>
                    <div className='row curricular-row-header'>
                        <div className="col-sm-7">
                            <h3>{props.obj.role}</h3>
                            <span>{props.obj.club}</span>
                            <br/>
                            <span>{fromTo(props.obj.start,props.obj.end)}</span>
                        </div>
                        <div className="col-sm-5 rightAlign"> 
                            <img 
                            className={props.obj.styling} 
                            src={props.obj.media.image} />
                        </div> 
                    </div>
                </div>
    }

    return (
      <div className="card blue-grey text-white mb-3">
        {mainInfo()}
        {description()}
      </div>
  );
}

export default CurricularCard;
