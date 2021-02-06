import React from 'react';
import {skillList} from '../lib/data/Skills'
import './Pages.css'
import SkillCard from '../components/SkillCard';
import Header from '../components/common/Header';

const Skills:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Skills"}}/>
            <div className="row">
                {skillList.map(item=>
                    <div className="col-md-4">
                        <SkillCard obj={item}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
