import React, { useState } from 'react';

const ImageWithHover:React.FC<{image: string, text: string}>=(prop)=> {
    // const [hoverState, setHoverState] =  useState<boolean>(false);
    return <div className="card reelImage">
    <img className="card-img-top reelImage" src={prop.image}/>
    <div className="card-img-overlay">
        <h4 className="card-title">{prop.text}</h4>
    </div>
    </div>
}

export default ImageWithHover;
