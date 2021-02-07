import React, { useState } from 'react';
import {additionalEvents} from '../../lib/data/Dance'
import { monthYear } from '../../lib/dateMod';
import { DanceCardProps, ButtonProps } from '../../lib/interfaces';
import PanelButton from '../common/PanelButton';

const OtherDanceBattles:React.FC = () => {
    enum ButtonStates {
        LOCATION = 'Loc.',
        FORMAT = 'Format',
        DATE = 'Date',
        INFO = 'Info'
    }

    var buttonProp: ButtonProps[] = [
        {name: ButtonStates.LOCATION, hoverEnter:ButtonStates.LOCATION},
        {name: ButtonStates.FORMAT,hoverEnter:ButtonStates.FORMAT},
        {name: ButtonStates.DATE,hoverEnter:ButtonStates.DATE},
        {name: ButtonStates.INFO,hoverEnter:ButtonStates.INFO},
    ]

    const [colState, setColumnState] =  useState<string>(ButtonStates.LOCATION);

    const displayState = (item: DanceCardProps) => {
        switch(colState){
            case ButtonStates.LOCATION:
                return item.location
            case ButtonStates.FORMAT:
                return item.format
            case ButtonStates.DATE:
                return monthYear(item.date)
            case ButtonStates.INFO:
                return item.info
        }
    }

    return <div className="card blue-grey text-white">
        <div className="card-header center-text">
            <h3>Additonal Battles Qualified</h3>
        </div>
        <table className="table text-white">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Placement</th>
                    <th scope="col">{<PanelButton obj={buttonProp} thefunc={setColumnState} style={true}/>}</th>
                </tr>
            </thead>
            <tbody>
            {additionalEvents.map(item=>{
                return <tr>
                        <td>{item.event}</td>
                        <td>{item.placement}</td>
                        <td>{displayState(item)}</td>
                    </tr>
            })}
            </tbody>
        </table>
    </div>
 
}

export default OtherDanceBattles;