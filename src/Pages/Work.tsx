import React from 'react';
import {work} from '../lib/data/Work'
import '../App.css'
import WorkCard from '../components/work/WorkCard';
import Header from '../components/common/Header';
import './Pages.css'

const Work:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Job Experience"}}/>
            <div className="row">
                {work.map(company=>
                    <div className="col-xl-6 work-card">
                        <WorkCard obj={company}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Work;
