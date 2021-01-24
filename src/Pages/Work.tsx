import React from 'react';
import {work} from '../lib/data/Work'
import '../App.css'
import WorkCard from '../components/WorkCard';

const Work:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <h2>Job Experience</h2>
            {work.map(company=>
                <div className="col-md-6 WorkCard">
                    <WorkCard obj={company}/>
                </div>
            )}
        </div>
    );
}

export default Work;
