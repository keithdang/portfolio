import React from 'react';
import {events} from '../lib/data/Dance'
import '../App.css'
import DanceCard from '../components/DanceCard';

const Dance:React.FC=()=> {
    return (
        <div className="container">
            {events.map(event=>
                <div className="col-md-4 danceCard">
                    <DanceCard obj={event}/>
                </div>
            )}
        </div>
    );
}

export default Dance;
