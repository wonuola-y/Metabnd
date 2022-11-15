import React from "react";
import MbToken from "./tools/MBtoken.svg";
import Metamask from "./tools/metamask.svg";
import OpenSea from "./tools/opensea.svg";
function Strip() {
  return (
    <div className="strip-div">
      <ul className="strip">
        <li>
          <img src={MbToken} alt="" />
        </li>
        <li>
          <img src={Metamask} alt="" />
        </li>
        <li>
          <img src={OpenSea} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Strip;
