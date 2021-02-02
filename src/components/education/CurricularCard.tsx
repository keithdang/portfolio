import React from 'react';
import { CurricularProps} from '../../lib/interfaces'
import '../../App.css'
import { fromTo } from '../../lib/dateMod';


const CurricularCard:React.FC<{ obj: CurricularProps }> = (props) => {
    const description = () => {
        return <div className='card-body curricularCard'>
                    <ul className="cardList">
                     {props.obj.description.map(info=>{
                            return <li>{info}</li>
                        })}
                    </ul>
                </div>
    }

    const mainInfo = () => {
        return <div className='card-header'>
                    <div className='row'>
                        <div className="col-md-6">
                            <h3>{props.obj.role}</h3>
                            <span>{props.obj.club}</span>
                            <br/>
                            <span>{fromTo(props.obj.start,props.obj.end)}</span>
                        </div>
                        <div className="col-md-6 rightAlign"> 
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
