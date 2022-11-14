import React from "react";

import dkOne from "./tools/dk-one.svg";
import dkTwo from "./tools/dk-two.svg";
import dkThree from "./tools/dk-three.svg";
import dkFour from "./tools/dk-four.svg";
import dkFive from "./tools/dk-five.svg";
import dkSix from "./tools/dk-six.svg";
import dkSeven from "./tools/dk-seven.svg";
import dkEight from "./tools/dk-eight.svg";
import { Link } from "react-router-dom";

function Place() {
  return (
    <div className="card-holder">
      <h1>Inspiration for your next adventure</h1>
      <div className="cards">
        <img alt="destination-img" src={dkOne} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkTwo} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkThree} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkFour} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkFive} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkSix} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkSeven} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
      </div>
      <div className="cards">
        <img alt="destination-img" src={dkEight} />
        <div className="cardText">
          <em>Desert King</em>
          <em>
            <b>1MBT per night </b>
          </em>
          <em>2345km away</em>
          <em>available for 2 weeks stay</em>
        </div>
        <button> <Link to="/PTS">See more</Link> </button>
      </div>
    </div>
  );
}

export default Place;
