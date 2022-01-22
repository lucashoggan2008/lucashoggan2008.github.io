import React from 'react';
import '../css/navbar.css'

const facebookIcon = <img className="social-icon" src={process.env.PUBLIC_URL+"icons/facebook-icon.png"} alt="Facebook logo" />
const twitterIcon = <img className="social-icon"  src={process.env.PUBLIC_URL+"icons/twitter-icon.png"} alt="Instagram logo" />

const Navbar = () => {
  return (<div className="navbar">
      <div className="flex-contain">
      <h1 className="navbar-title text">Lucas <span className="text-p">Hoggan</span></h1>
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

export default Navbar;
