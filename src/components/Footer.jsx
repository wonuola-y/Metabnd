import React from "react";
import logo from "./tools/logobg.svg";
import PreloadImage from 'react-preload-image';
import twitter from "./tools/twitter.svg";
import facebook from "./tools/facebook.svg";
import instagram from "./tools/instagram.svg";
import copyright from './tools/copyright.svg'
function Footer() {
  return (
 <div className="footer-container">
     <div className="footer">
      <div>
        <img src={logo} alt="logo dark img" className="footer-logo"/>
        <div className="thumbnail-list">
          <PreloadImage style={{width: '33px', height: '31px'}} className="thumbnails"
            src={facebook}
            alt="facebook"
          />
          <PreloadImage style={{width: '33px', height: '31px'}} className="thumbnails"
            src={twitter}
            alt="twitter icon"
          />
          <PreloadImage style={{width: '33px', height: '31px'}} className="thumbnails"
            src={instagram}
            alt="instagram icon"
          />
         
        </div>
        <div className="copy">
          <img src={copyright} className="copyright" alt="copyright icon" />
          <h6>2022 Metabnb</h6>
          </div>
      </div>
      <div>
        <h6>Community</h6>
        <ul>
          <li>NFTs</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>
      <div>
        <h6>Places</h6>
        <ul>
          <li>Castle</li>
          <li>Farm </li>
          <li>Beach</li>
          <li>LearnMore</li>
        </ul>
      </div>
      <div>
        <h6>About Us</h6>
        <ul>
          <li>Road map</li>
          <li>Career</li>
          <li>Creators</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
 </div>
  );
}

export default Footer;
