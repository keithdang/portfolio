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
            <div className="row">
                <div className="col-xl-6">
                    <div>
                        <div className="card bg-light mb-3">
                            <div className="card-header">
                                <h3>Bachelor's of Electrical Engineering</h3>
                            </div>
                            <div className="card-body">
                                <p>
                                    Montreal, QC
                                    <br />
                                    2012-2017
                                    <br />
                                    GPA:3.24/4
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Projects</h3>
                        {projects.map(project=>
                        <Project obj={project}/>
                        )}
                    </div>
                </div>
                <div className="col-xl-6">
                    <h3>Extra Curriculars</h3>
                    {curriculars.map(curricular=>
                        <CurricularCard obj={curricular}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default University;
