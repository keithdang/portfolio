import React from 'react';
import {work} from '../lib/data/Work'
import '../App.css'
import WorkCard from '../components/WorkCard';

const Work:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <h2>Job Experience</h2>
            <div className="row">
                {work.map(company=>
                    <div className="col-xl-6 workCard">
                        <WorkCard obj={company}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Work;
