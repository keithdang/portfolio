import React from 'react';
import {events, additionalEvents} from '../lib/data/Dance'
import '../App.css'
import DanceCard from '../components/DanceCard';
import OtherDanceBattles from '../components/OtherDanceBattles';

const Dance:React.FC=()=> {
    return (
        <div className="container">
            <div>
            {events.map(event=>
                <div className="col-md-4 danceCard">
                    <DanceCard obj={event}/>
                </div>
            )}
            </div>
            <div className="col-md-6">
                <OtherDanceBattles/>
            </div>
            
        </div>
    );
}

export default Dance;
