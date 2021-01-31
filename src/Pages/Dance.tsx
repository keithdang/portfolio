import React from 'react';
import {events, testimonials} from '../lib/data/Dance'
import '../App.css'
import DanceCard from '../components/dance/DanceCard';
import OtherDanceBattles from '../components/dance/OtherDanceBattles';
import Testimonial from '../components/dance/Testimonial';

const Dance:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <h2>Dance</h2>
            <div className="row">
                {events.map(event=>
                    <div className="col-xl-4 col-md-6 danceCard">
                        <DanceCard obj={event}/>
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-xl-7">
                    <OtherDanceBattles/>
                </div>
                <div className="col-xl-5">
                    <h3>Testimonials</h3>
                {testimonials.map(info=>
                        <Testimonial obj={info}/>
                )}
                </div>
            </div>
        </div>
    );
}

export default Dance;
