import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './page/Home'
import Projects from './page/Projects'
import Dance from './page/Dance'
import Work from './page/Work'
import Education from './page/Education'
import Skills from './page/Skills'
import Reel from './page/Reel';
import './lib/General.css'

const App:React.FC=()=> {
  return (
    <div className="background">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light header-color">
          <Link className="navbar-brand" to="/">Keith</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Dance</a>
              <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/dance">Accomplishments</Link></li>
                  <li><Link className="dropdown-item" to="/reel">Reel</Link></li>
                </ul></li>
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
          <Route path="/reel">
              <Reel/>
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
