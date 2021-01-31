import React from 'react';

const Home:React.FC=()=> {
  return (
      <div className="container pagedisplay">

        <h2>KEITH DANG</h2>
        
        {/* <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> */}
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
