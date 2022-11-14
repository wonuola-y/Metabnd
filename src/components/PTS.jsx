import React from "react";

import dkOne from "./tools/dk-one.svg";
import dkTwo from "./tools/dk-two.svg";
import dkThree from "./tools/dk-three.svg";
import dkFour from "./tools/dk-four.svg";
import dkFive from "./tools/dk-five.svg";
import dkSix from "./tools/dk-six.svg";
import dkSeven from "./tools/dk-seven.svg";
import dkEight from "./tools/dk-eight.svg";
import dkNine from "./tools/dk-nine.svg";
import dkTen from "./tools/dk-ten.svg";
import dkEleven from "./tools/dk-eleven.svg";
import dkTwelve from "./tools/dk-twelve.svg";
import dkThirteen from "./tools/dk-thirteen.svg";
import dkFourteen from "./tools/dk-fourteen.svg";
import dkFifteen from "./tools/dk-fifteen.svg";
import dkSixteen from "./tools/dk-sixteen.svg";
import filter from "./tools/filter.svg";
import stars from "./tools/stars.svg";
function Place() {
  return (
    <div>
      <ul className="places">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast city</li>
        <li>Beach</li>
        <li>Off grid</li>
        <button className="location-filter">
          Location <img src={filter} alt="filter button" />
        </button>
      </ul>
      <div className="card-holder">
        <div className="cards">
          <img alt="destination-img" src={dkOne} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
            <img src={stars} alt="stars icon" />
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
            <img src={stars} alt="stars icon" />
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
            <img src={stars} alt="stars icon" />
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
            <img src={stars} alt="stars icon" />
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
            <img src={stars} alt="stars icon" />
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
            <img src={stars} alt="stars icon" />
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
        </div>
        <div className="cards">
          <img alt="destination-img" src={dkNine} />
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
          <img alt="destination-img" src={dkTen} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkEleven} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkTwelve} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkThirteen} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkFourteen} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkFifteen} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>{" "}
        <div className="cards">
          <img alt="destination-img" src={dkSixteen} />
          <div className="cardText">
            <em>Desert King</em>
            <em>
              <b>1MBT per night </b>
            </em>
            <em>2345km away</em>
            <em>available for 2 weeks stay</em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
