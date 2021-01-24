import React from 'react';
import {curriculars} from '../lib/data/Curricular'
import {projects} from '../lib/data/SchoolProjects'
import '../App.css'
import CurricularCard from '../components/education/CurricularCard';
import Project from '../components/education/Project';

const University:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <h2>McGill University</h2>
            <div className="col-md-6">
                <h3>Projects</h3>
                {projects.map(project=>
                <Project obj={project}/>
                )}
            </div>
            <div className="col-md-6">
                <h3>Extra Curriculars</h3>
                {curriculars.map(curricular=>
                    <CurricularCard obj={curricular}/>
                )}
            </div>
        </div>
    );
}

export default University;
