import React from 'react';
import Header from '../components/common/Header';
import keith from '../lib/images/keith2.jpg'
import mcgillkeith from '../lib/images/mcgillKeith.jpg'
import './Pages.css'

const Home:React.FC=()=> {
  return (
      <div className="container pagedisplay">
        <Header obj={{title:"Welcome"}}/>
        <div className="card blue-grey">
            <div className="card-body text-white center-text">
              <div>
                <p>
                  Welcome to my website. My name is Keith Dang. I graduated from
                  McGill Univeristy for my Bachelor's of Electrical Engineering
                  and Software Developer at Oracle.
                  <br />
                  Currently eager to explore the world of web development. I
                  also have a passion for dance. This site will give you all the fun
                  details about me. Enjoy!
                  <br />
                  This site was developed through React, Typescript & Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="card blue-grey">
            <div className="card-body row">
              <div className="col-xl-6 centerAlign">
              <img className="home-image" src={keith}/>
              </div>
              <div className="col-xl-6 centerAlign">
              <img className="home-image" src={mcgillkeith}/>  
              </div>
            
            
            </div>
        </div>
      </div>

  );
}


export default Home;
