import React from 'react';

import {Link} from 'react-router-dom';

const facebookIcon = <img className="nav-selc-icon" src={process.env.PUBLIC_URL+"icons/facebook-icon.png"} alt="Facebook logo" />
const twitterIcon = <img className="nav-selc-icon"  src={process.env.PUBLIC_URL+"icons/twitter-icon.png"} alt="Instagram logo" />
const aboutMeIcon = <img src={process.env.PUBLIC_URL+"icons/about-me-icon.svg"} alt="about me" className="nav-selc-icon" />
const projectIcon = <img src={process.env.PUBLIC_URL+"icons/projects-icon.svg"} alt="project" className="nav-selc-icon" />
const homePageIcon = <img src={process.env.PUBLIC_URL+"icons/home-page-icon.svg"} alt="hello" className="nav-selc-icon" />

const Navbar = (props) => {
    let classNames = {
        "home":"nav-selc-link",
        "projects":"nav-selc-link",
        "about-me":"nav-selc-link"
    }
    if (props.curPage in classNames) {
        classNames[props.curPage]+= " nav-selc-link-on"
    }
  return <nav className="nav">
      <Link to="/" className="text-link"><h2 className="title-text">Lucas <span className="text-s">Hoggan</span> </h2></Link>
        <div className="nav-selc">
            <Link to="/about-me" className={classNames["about-me"]}>{aboutMeIcon}</Link>
            <Link to="/projects" className={classNames["projects"]}>{projectIcon}</Link>
            <Link to="/" className={classNames["home"]}>{homePageIcon}</Link>
        </div>
        <div className="nav-selc">
            <Link to="/" className="nav-selc-link social-icon facebook-icon">{facebookIcon}</Link>
            <Link to="/" className="nav-selc-link social-icon twitter-icon">{twitterIcon}</Link>
        </div>
  </nav>;
};

export default Navbar;
