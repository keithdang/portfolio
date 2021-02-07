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
import NavBar from './components/navigation/NavBar';
import './lib/General.css'

const App:React.FC=()=> {
  return (
    <div className="background">
      <Router>
        <NavBar/>
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
