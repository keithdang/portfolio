import React from 'react';
import {reel} from '../lib/data/Dance'
import '../App.css'
import Header from '../components/common/Header';
import { isPhoto, MediaProps, Photo } from '../lib/interfaces';
import ImageWithHover from '../components/common/ImageWithHover';

const Reel:React.FC=()=> {
    return (
        <div className="container pagedisplay">
            <Header obj={{title:"Dance"}}/>
                <div className="card blue-grey">
                    <div className="row">
                    {reel.map(prop=>
                        <div className="col-xl-6 reelComponent">
                            {isPhoto(prop.media) ? 
                            <img className="reelImage" src={prop.media.image}/>:
                            <iframe className="reelVid" src={prop.media.link}/>
                            }
                        </div>
                    )}
                    </div>
                </div>
        </div>
    );
}

export default Reel;
