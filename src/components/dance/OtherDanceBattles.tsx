import React, { useState } from 'react';
import {additionalEvents} from '../../lib/data/Dance'
import { monthYear } from '../../lib/dateMod';
import { DanceCardProps, ButtonProps } from '../../lib/interfaces';

const OtherDanceBattles:React.FC = () => {
    const [colState, setColumnState] =  useState<string>("location");
    enum ButtonStates {
        LOCATION = 'Loc.',
        FORMAT = 'Format',
        DATE = 'Date',
        INFO = 'Info'
    }
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
            default:
                return item.location
        }
    }

    const createButton = (buttonProp: ButtonProps) => {
        if(buttonProp.hoverEnter){
            return <button 
                type="button" 
                onMouseEnter={()=>setColumnState(buttonProp.hoverEnter!!)} 
                onMouseLeave={()=>setColumnState(buttonProp.hoverLeave!!)} 
                className="btn btn-primary"
            >{buttonProp.name}</button>
        }else{
            return <button 
                type="button" 
                className="btn btn-primary"
            >{buttonProp.name}</button>
        }
    }

    const buttonPanel = () => {
        var buttonProp: ButtonProps[] = [
            {name: ButtonStates.LOCATION},
            {name: ButtonStates.FORMAT,hoverEnter:ButtonStates.FORMAT,hoverLeave:ButtonStates.LOCATION},
            {name: ButtonStates.DATE,hoverEnter:ButtonStates.DATE,hoverLeave:ButtonStates.LOCATION},
            {name: ButtonStates.INFO,hoverEnter:ButtonStates.INFO,hoverLeave:ButtonStates.LOCATION},
        ]
        return <div className="btn-group" role="group">
            {buttonProp.map(item => {
                return createButton(item)
            })}
        </div>
    }

    return <div>
        <h3>Additonal Battles Qualified</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Event</th>
                    <th scope="col">Placement</th>
                    <th scope="col">{buttonPanel()}</th>
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