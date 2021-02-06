import React from 'react';
import {TestimonialProps} from '../../lib/interfaces'

const Testimonial:React.FC<{ obj: TestimonialProps }> = (props) => {
    return (
      <div>
        <span>"{props.obj.desc}"</span>
        <br/>
        <span>-{props.obj.name}</span>
      </div>
  );
}

export default Testimonial;
