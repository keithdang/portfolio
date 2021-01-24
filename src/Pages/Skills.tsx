import React from 'react';
import {skillList} from '../lib/data/Skills'
import '../App.css'
import SkillCard from '../components/SkillCard';

const Skills:React.FC=()=> {
    return (
        <div className="container">
            {skillList.map(item=>
                <div className="col-md-4">
                    <SkillCard obj={item}/>
                </div>
            )}
        </div>
    );
}

export default Skills;
