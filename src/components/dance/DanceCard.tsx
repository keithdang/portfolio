import React, { useState } from 'react';
import {DanceCardProps} from '../../lib/interfaces'
import {monthYear} from '../../lib/dateMod'

const DanceCard:React.FC<{ obj: DanceCardProps }> = (props) => {
    const [cardState, setCardState] =  useState<string>("placement");
    
    const info = () => {
        return <div style={{maxWidth:400}}>
            <span>{props.obj.format}</span>
            <br/>
            <span>{monthYear(props.obj.date)}</span>
            <br/>
            <span>{props.obj.location}</span>
        </div>
    }

    const placement = () => {
        return <div className="danceInfo">
            {props.obj.placement && <h3>{props.obj.placement}</h3>}
            {props.obj.info && props.obj.info.length < 40 ? <h3>{props.obj.info}</h3> : <h5>{props.obj.info}</h5>}
        </div>
    }

    const displayState = () => {
        switch(cardState){
            case "placement":
                return placement()
            case "info":
                return info()
        }
    }

    return (
      <div className="container">
        <div className="danceHeader">
            <div className="row">
                <h4 className="col-md-8">{props.obj.event}</h4>
            <button type="button" onMouseEnter={()=>setCardState("info")} onMouseLeave={()=>setCardState("placement")} className="btn btn-primary" onClick={()=>setCardState("info")}>Info</button>
            </div>
            
        </div>
        {displayState()}
      </div>
  );
}

export default DanceCard;
