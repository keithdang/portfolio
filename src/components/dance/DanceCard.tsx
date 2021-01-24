import React, { useState } from 'react';
import {DanceCardProps} from '../../lib/interfaces'

const DanceCard:React.FC<{ obj: DanceCardProps }> = (props) => {
    const [cardState, setCardState] =  useState<string>("placement");
    
    const info = () => {
        return <div style={{maxWidth:400}}>
            <span>{props.obj.format}</span>
            <br/>
            <span>{props.obj.date.toDateString()}</span>
            <br/>
            <span>{props.obj.location}</span>
        </div>
    }

    const placement = () => {
        return <div style={{maxWidth:400}}>
            <span>{props.obj.placement}</span>
            <br/>
            <span>{props.obj.info}</span>
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
        <h3>{props.obj.event}</h3>
        <br/>
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("placement")}>Placement</button>
            <button type="button" className="btn btn-primary" onClick={()=>setCardState("info")}>Info</button>
        </div>
        <br/>
        {displayState()}
      </div>
  );
}

export default DanceCard;
