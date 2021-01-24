import React from 'react';
import {curriculars} from '../lib/data/Curricular'
import '../App.css'
import CurricularCard from '../components/CurricularCard';

const University:React.FC=()=> {
    return (
        <div className="container">
            <div className="col-md-6">
                <h3>Projects</h3>
            </div>
            <div className="col-md-6">
            {curriculars.map(curricular=>
                <CurricularCard obj={curricular}/>
                )}
            </div>
        </div>
    );
}

export default University;
