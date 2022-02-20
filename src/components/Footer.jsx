import { Link } from "react-router-dom";
import DragDiv from './DragDiv'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <DragDiv className="footer-row-col">
        <div className="footer-page-selc">
          <div className="footer-row-col-title">Pages</div>
            <Link className="page-selc-link text-link" to="/">
              Home
            </Link>
          
          
            <Link className="page-selc-link text-link" to="/about-me">
              About Me
            </Link>
          
          
            <Link className="page-selc-link text-link" to="/projects#page-title-container">
              Projects
            </Link>
          
        </div>
        </DragDiv>
        <DragDiv className="footer-row-col">
            <div className="footer-page-selc">
                <div className="footer-row-col-title">Social Acounts</div>
                <a target = "_blank" className="page-selc-link text-link" href="https://www.facebook.com/profile.php?id=100076263414741">Facebook</a>
                <a target = "_blank" className="page-selc-link text-link" href="https://twitter.com/lucashoggan">Twitter</a>
                <a target = "_blank" className="page-selc-link text-link" href="https://www.instagram.com/senor_hoggan/">Instagram</a>
            </div>
        </DragDiv>
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
