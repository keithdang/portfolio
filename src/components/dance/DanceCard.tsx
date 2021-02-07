import React, { useState } from 'react';
import {ButtonProps, DanceCardProps} from '../../lib/interfaces'
import {monthYear} from '../../lib/dateMod'
import PanelButton from '../common/PanelButton';
import './Dance.css'

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
        return <div className="centerAlign">
            <div>
                <span>{props.obj.format}</span>
                <br/>
                <span>{monthYear(props.obj.date)}</span>
                <br/>
                <span>{props.obj.location}</span>
            </div>
        </div>
    }

    const placement = () => {
        return <div className="dance-info">
            <div>
            {props.obj.placement && <h3>{props.obj.placement}</h3>}
            {props.obj.info && props.obj.info.length < 40 ? <h3>{props.obj.info}</h3> : <span>{props.obj.info}</span>}
            </div>
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
            <div className="row dance-row-header">
                <h4 className="col-sm-10">{props.obj.event}</h4>
                <div className="col-sm-2 rightAlign">
                    <PanelButton obj={buttonProp} thefunc={setCardState} style={false}/>
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
