import React from 'react';
import {
  Link,
} from "react-router-dom";
import instagram from "../../lib/images/png/003-instagram.png";
import github from "../../lib/images/png/005-github-logo.png";
import linkedin from "../../lib/images/png/007-linkedin-logo.png";
import email from "../../lib/images/png/email.png";
import './NavBar.css'

const SkillCard:React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header-color">
        <Link className="navbar-brand" to="/">Keith</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="navbar-content">
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
          <ul className="navbar-nav ml-auto icon-nav" id="navbar-content">
              <li>
                <a href="https://www.instagram.com/slow.keith/">
                <img src={instagram}  className="contact-image"/>
              </a>
              </li>
              <li>
                <a href="https://github.com/keithdang">
                  <img src={github} className="contact-image"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/keith-dang-60a27681/">
                  <img src={linkedin} className="contact-image"/>
                </a>
              </li>
              <li>
                <a href="mailto:keith.dang11@gmail.com">
                  <img src={email} className="contact-email"/>
                </a>
              </li>
          </ul>
        </div>
      </nav>
  );
}

export default SkillCard;
