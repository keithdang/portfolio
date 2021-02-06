import React from 'react';
import { HeaderProps } from '../../lib/interfaces';
import './Common.css';

const Header:React.FC<{obj: HeaderProps}>=(props)=> {
    return (
        <div className="card blue-grey text-white mb-3 mt-3">
            <div className="card-header p-3 centerAlign center-text">
                <div style={{display: 'block'}}>
                    {props.obj.title && <h2>{props.obj.title}</h2>}
                    {props.obj.desc && <span>{props.obj.desc}</span>}
                </div>
                {props.obj.image && 
                    <img className="image-header" src={props.obj.image} />
                }
            </div>
            
        </div>
    );
}

export default Header;
