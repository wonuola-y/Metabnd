import React from "react";
import HeroImg from "./tools/Group.svg";
function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <div className="input">
          <input type="text" /> <input type="submit" value="Search" />
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="hero-images" />
      </div>
    </div>
  );
}

export default Hero;
