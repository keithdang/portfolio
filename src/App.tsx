import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dance from './pages/Dance'
import Work from './pages/Work'

const App:React.FC=()=> {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">Keith</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/dance">Dance</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/">Education</Link></li>
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
          <Route path="/personalprojects">
              <Projects/>
          </Route>
          <Route path="/dance">
              <Dance/>
          </Route>
          <Route path="/work">
              <Work/>
          </Route>
          <Route path="/schoolprojects">
              <Projects/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
