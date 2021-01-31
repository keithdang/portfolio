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
import Education from './pages/Education'
import Skills from './pages/Skills'

const App:React.FC=()=> {
  return (
    <div>
      <Router>
        {/* <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">Keith</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/dance">Dance</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
        </nav> */}

              {/* <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Projects
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/personalprojects">Personal</Link></li>
                  <li><Link to="/schoolprojects">School</Link></li>
                </ul>
              </li> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <Link className="navbar-brand" to="/">Keith</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li><Link className="nav-link" to="/dance">Dance</Link></li>
              <li><Link className="nav-link" to="/work">Work</Link></li>
              <li><Link className="nav-link" to="/education">Education</Link></li>
              <li><Link className="nav-link" to="/skills">Skills</Link></li>
              <li><Link className="nav-link" to="/projects">Projects</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/projects">
              <Projects/>
          </Route>
          <Route path="/skills">
              <Skills/>
          </Route>
          <Route path="/dance">
              <Dance/>
          </Route>
          <Route path="/work">
              <Work/>
          </Route>
          <Route path="/education">
              <Education/>
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
