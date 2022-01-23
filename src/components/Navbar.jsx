import React from 'react';
import '../css/navbar.css'
import {Link} from 'react-router-dom'

const facebookIcon = <img className="social-icon" src={process.env.PUBLIC_URL+"icons/facebook-icon.png"} alt="Facebook logo" />
const twitterIcon = <img className="social-icon"  src={process.env.PUBLIC_URL+"icons/twitter-icon.png"} alt="Instagram logo" />
const aboutMeIcon = <img src={process.env.PUBLIC_URL+"icons/about-me-icon.svg"} alt="about me image" className="nav-icon" />
const projectIcon = <img src={process.env.PUBLIC_URL+"icons/projects-icon.svg"} alt="project image" className="nav-icon" />
const homePageIcon = <img src={process.env.PUBLIC_URL+"icons/home-page-icon.svg"} alt="hello" className="nav-icon" />



const Navbar = () => {
  return (<div className="navbar">
      <div className="flex-contain">
      <NavigationIconsBar />
      <Link className="link" to='/'><h1 className="navbar-title text">Lucas <span className="text-p">Hoggan</span></h1></Link>
        <SocialIconsBar />
        
        </div>
  </div>);
};

const SocialIconsBar = () => {
    return (
        <ul className="social-list">
            <li className="social-list-item">
                <a rel="noreferrer" target="_blank" href="https://twitter.com/lucashoggan">{twitterIcon}</a>
            </li>
            <li className="social-list-item">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100076263414741">{facebookIcon}</a>
            </li>
        </ul>
    )
}



const NavigationIconsBar =  () => {
    return (
        <div className="nav-icons-bar">
            <Link to="/about-me" class="nav-icon-link">{aboutMeIcon}</Link>
            <Link to="/projects" class="nav-icon-link">{projectIcon}</Link>
            <Link to="/" class="nav-icon-link">{homePageIcon}</Link>
        </div>
    )
}
export default Navbar;
