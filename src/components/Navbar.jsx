import React, { useState } from "react";
import logo from "./tools/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [list, setList] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav>
       <Link to="/" className="home"> <img src={logo} alt="logo" className="logo" /></Link>
        <div className="menu">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png"
            alt="menu icon"
            className={list ? "nav-list" : "display"}
            onClick={() => {
              setList(!list);
            }}
          
          />
          <img src="https://cdn-icons-png.flaticon.com/128/657/657059.png"  alt="cancel button" className={list ? "display" : "nav-list"} onClick={()=>{
             setList(!list);
          }}/>
        </div>
      </nav>
      <ul className={list ? "nav-list view" : "nav-list"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
        <li>
          <Link to="/PTS">Place to stay</Link>
        </li>
        <li>
          <Link to="/Nft">NFTs</Link>
        </li>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Connect wallet
        </button>
        <div className={show ? "overall view" : "close"}>
          {" "}
          <div className="connect">
            <div className="row-one">
              <h3>Connect wallet</h3>
              <em
                onClick={() => {
                  setShow(!show);
                }}
                className="clear"
              >
                x
              </em>
            </div>
            <hr />
            <p>Choose your preferred wallet</p>
            <div className="collections">
              <button className="wallet">
                {" "}
                Metamask <span>&gt;</span>
              </button>
              <button className="wallet">
                {" "}
                Wallet Connect <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
