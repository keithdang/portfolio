import React from 'react';
import { CurricularProps} from '../../lib/interfaces'
import '../../App.css'
import { fromTo } from '../../lib/dateMod';


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
                    <div className="col-md-6">
                        <h3>{props.obj.role}</h3>
                        <span>{props.obj.club}</span>
                        <br/>
                        <span>{fromTo(props.obj.start,props.obj.end)}</span>
                    </div>
                    <div className="col-md-6"> 
                        <img 
                        className={props.obj.club === 'Engineers Without Borders' ? "rectImage": "squareImage"} 
                        src={props.obj.media.image} />
                    </div> 
                </div>
    }

    return (
      <div>
        {mainInfo()}
        {description()}
      </div>
  );
}

export default CurricularCard;
