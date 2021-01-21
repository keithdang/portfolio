import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'

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
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Projects
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/personalprojects">Personal</Link></li>
                  <li><Link to="/schoolprojects">School</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/keith">
              <Home/>
          </Route>
          <Route path="/personalprojects">
              <Projects/>
          </Route>
          <Route path="/schoolprojects">
              <Projects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
