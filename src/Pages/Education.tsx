import React from 'react';
import {curriculars} from '../lib/data/Curricular'
import {projects} from '../lib/data/SchoolProjects'
import '../App.css'
import CurricularCard from '../components/education/CurricularCard';
import Project from '../components/education/Project';
import Header from '../components/common/Header';
import McGill from '../lib/images/McGill_logo.png';
import './Pages.css'

const University:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{image:McGill}}/>
            <div className="row">
                <div className="col-xl-6">
                    <div>
                        <div className="card blue-grey text-white mb-3 mt-3">
                            <div className="card-header centerAlign">
                                <h3>Bachelor's of Electrical Engineering</h3>
                            </div>
                            <div className="card-body centerAlign">
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
                        <Header obj={{title: "Projects"}}/>
                        {projects.map(project=>
                        <Project obj={project}/>
                        )}
                    </div>
                </div>
                <div className="col-xl-6">
                    <Header obj={{title: "Extra Curriculars"}}/>
                    {curriculars.map(curricular=>
                        <CurricularCard obj={curricular}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default University;
