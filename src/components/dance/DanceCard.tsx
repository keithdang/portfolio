import React, { useState } from 'react';
import {ButtonProps, DanceCardProps} from '../../lib/interfaces'
import {monthYear} from '../../lib/dateMod'
import PanelButton from '../PanelButton';

const DanceCard:React.FC<{ obj: DanceCardProps }> = (props) => {
    enum ButtonStates {
        INFO = 'Info',
        PLACEMENT = 'Placement'
    }

    const [cardState, setCardState] =  useState<string>(ButtonStates.PLACEMENT);
    
    var buttonProp: ButtonProps[] = [
        {name: ButtonStates.INFO, hoverEnter:ButtonStates.INFO, hoverLeave: ButtonStates.PLACEMENT},
    ]

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
            {props.obj.info && props.obj.info.length < 40 ? <h3>{props.obj.info}</h3> : <span>{props.obj.info}</span>}
        </div>
    }

    const displayState = () => {
        switch(cardState){
            case ButtonStates.PLACEMENT:
                return placement()
            case ButtonStates.INFO:
                return info()
        }
    }

    return (
      <div className="card blue-grey text-white mb-3">
        <div className="card-header">
            <div className="row">
                <h4 className="col-md-10">{props.obj.event}</h4>
                <div className="col-md-2 rightAlign">
                    <PanelButton obj={buttonProp} thefunc={setCardState}/>
                </div>
            </div>
        </div>
        <div className="card-body">
            {displayState()}
        </div>
      </div>
  );
}

export default DanceCard;
