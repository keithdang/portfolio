import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home'

const App:React.FC=()=> {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="/keith">Education</Link></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/keith">Education</Link></li>
                  <li><Link to="/keith">Education</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
        <Route path="/keith">
                    <Home/>
                </Route>
        </Switch>
      </Router>

        
      <div className="container">
        <h3>Basic Navbar Example</h3>
        <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
      </div>
    </div>
  );
}

export default App;
