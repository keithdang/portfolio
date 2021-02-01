import React from 'react';
import Header from '../components/common/Header';

const Home:React.FC=()=> {
  return (
      <div className="container pagedisplay">
        <Header obj={{title:"Welcome"}}/>
        <div className="container">
          <h2>Basic Card</h2>
          <div className="card">
            <div className="card-body">Basic card</div>
          </div>
        </div>
      </div>
  );
}


export default Home;
