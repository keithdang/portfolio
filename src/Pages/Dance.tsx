import React from 'react';
import {events, testimonials} from '../lib/data/Dance'
import '../App.css'
import DanceCard from '../components/dance/DanceCard';
import OtherDanceBattles from '../components/dance/OtherDanceBattles';
import Testimonial from '../components/dance/Testimonial';

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
            <div className="col-md-6">
                <h3>Testimonials</h3>
            {testimonials.map(info=>
                    <Testimonial obj={info}/>
            )}
            </div>
        </div>
    );
}

export default Dance;
