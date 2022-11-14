import React from "react";
import logo from './tools/logobg.svg'
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo dark img"/>
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
  );
}

export default Footer;
