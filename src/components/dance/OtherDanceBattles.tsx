import React, { useState } from 'react';
import {additionalEvents} from '../../lib/data/Dance'
import { monthYear } from '../../lib/dateMod';
import { DanceCardProps } from '../../lib/interfaces';

const OtherDanceBattles:React.FC = () => {
    const [colState, setColumnState] =  useState<string>("location");

    const displayState = (item: DanceCardProps) => {
        switch(colState){
            case "location":
                return item.location
            case "format":
                return item.format
            case "date":
                return monthYear(item.date)
            case "info":
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
                    <th scope="col"><div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={()=>setColumnState("location")}>Loc.</button>
                        <button type="button" className="btn btn-primary" onClick={()=>setColumnState("format")}>Format</button>
                        <button type="button" className="btn btn-primary" onClick={()=>setColumnState("date")}>Date</button>
                        <button type="button" className="btn btn-primary" onClick={()=>setColumnState("info")}>Info</button>
                    </div></th>
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