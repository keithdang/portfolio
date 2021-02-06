import React from 'react';
import {reel} from '../lib/data/Dance'
import Header from '../components/common/Header';
import { isPhoto } from '../lib/interfaces';
import './Pages.css'

const Reel:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Dance"}}/>
                <div className="card blue-grey">
                    <div className="row">
                    {reel.map(prop=>
                        <div className="col-xl-6 reel-component">
                            {isPhoto(prop.media) ? 
                            <img className="reel-image" src={prop.media.image}/>:
                            <iframe className="reel-vid" src={prop.media.link}/>
                            }
                        </div>
                    )}
                    </div>
                </div>
        </div>
    );
}

export default Reel;
