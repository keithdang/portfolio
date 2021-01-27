import React, { useState } from 'react';
import {additionalEvents} from '../../lib/data/Dance'
import { monthYear } from '../../lib/dateMod';
import { DanceCardProps, ButtonProps } from '../../lib/interfaces';
import PanelButton from '../PanelButton';

const OtherDanceBattles:React.FC = () => {
    enum ButtonStates {
        LOCATION = 'Loc.',
        FORMAT = 'Format',
        DATE = 'Date',
        INFO = 'Info'
    }

    var buttonProp: ButtonProps[] = [
        {name: ButtonStates.LOCATION},
        {name: ButtonStates.FORMAT,hoverEnter:ButtonStates.FORMAT,hoverLeave:ButtonStates.LOCATION},
        {name: ButtonStates.DATE,hoverEnter:ButtonStates.DATE,hoverLeave:ButtonStates.LOCATION},
        {name: ButtonStates.INFO,hoverEnter:ButtonStates.INFO,hoverLeave:ButtonStates.LOCATION},
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

    return <div>
        <h3>Additonal Battles Qualified</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Placement</th>
                    <th scope="col">{<PanelButton obj={buttonProp} thefunc={setColumnState}/>}</th>
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