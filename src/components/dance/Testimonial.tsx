import React, { useState } from 'react';
import {TestimonialProps} from '../../lib/interfaces'
import '../../App.css'

const Testimonial:React.FC<{ obj: TestimonialProps }> = (props) => {
    return (
      <div className="testimonial">
        <span>{props.obj.desc}</span>
        <br/>
        <span>-{props.obj.name}</span>
      </div>
  );
}

export default Testimonial;
