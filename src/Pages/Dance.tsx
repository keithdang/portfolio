import React from 'react';
import {events, testimonials, competitions} from '../lib/data/Dance'
import '../App.css'
import DanceCard from '../components/dance/DanceCard';
import OtherDanceBattles from '../components/dance/OtherDanceBattles';
import Testimonial from '../components/dance/Testimonial';
import Header from '../components/common/Header';


const Dance:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Dance"}}/>
            <Header obj={competitions}/>
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
                    <div className="card blue-grey">
                        <div className="card-header text-white center-text">
                            <h3>Testimonials</h3>
                        </div>
                        <div className="list-group list-group-flush">
                        {testimonials.map(info=>
                                <li className="list-group-item blue-grey text-white">
                                    <Testimonial obj={info}/>
                                </li>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dance;
