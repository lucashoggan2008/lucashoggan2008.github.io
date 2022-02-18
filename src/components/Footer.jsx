import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-row-col">
        <div className="footer-page-selc">
          <div className="footer-row-col-title">Pages</div>
            <Link className="page-selc-link text-link" to="/">
              me
            </Link>
          
          
            <Link className="page-selc-link text-link" to="/about-me">
              About Me
            </Link>
          
          
            <Link className="page-selc-link text-link" to="/projects#page-title-container">
              Projects
            </Link>
          
        </div>
        </div>
        <div className="footer-row-col">
            <div className="footer-page-selc">
                <div className="footer-row-col-title">Social Acounts</div>
                <Link className="page-selc-link text-link" to="/">Facebook</Link>
                <Link className="page-selc-link text-link" to="/">Twitter</Link>
            </div>
        </div>
      </div>
      <div
        id="coinmarketcap-widget-marquee"
        coins="1,1027,52"
        currency="GBP"
        theme="dark"
        transparent="false"
        show-symbol-logo="true"
      ></div>
    </div>
  );
};

export default Footer;
