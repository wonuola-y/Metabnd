import React, { useState } from "react";
import logo from "./tools/logo.svg";
import { Link } from "react-router-dom";
import MM from "./tools/MetaMaskIcon.svg";
import wc from "./tools/wc.svg";
function Navbar() {
  const [list, setList] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="nav">
        <nav>
          <Link to="/" className="home">
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="menu">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png"
              re
              alt="menu icon"
              className={list ? "nav-list" : "display"}
              onClick={() => {
                setList(!list);
              }}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/657/657059.png"
              rel="preconnect"
              alt="cancel button"
              className={list ? "display" : "nav-list"}
              onClick={() => {
                setList(!list);
              }}
            />
          </div>
        </nav>
        <ul className={list ? "nav-list view" : "nav-list"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PTS">Place to stay</Link>
          </li>

          <li>
            <Link to="/Nft">NFTs</Link>
          </li>
          <li>Community</li>
          <button
            className="connect-wallet-mobile"
            onClick={() => {
              setShow(!show);
            }}
          >
            Connect wallet
          </button>
        </ul>
        <div>
          <button
            className="connect-wallet"
            onClick={() => {
              setShow(!show);
            }}
          >
            Connect wallet
          </button>
        </div>
      </div>
      <div className={show ? "overall view overall-container" : "close"}>
        <div className="overall">
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
          </div>
          <hr />
          <p>Choose your preferred wallet</p>
          <div className="collections">
            <button className="wallet">
              {" "}
              <div>
                {" "}
                <img src={MM} alt="" />
                <em>Metamask</em>{" "}
              </div>
              <span>&gt;</span>
            </button>
            <button className="wallet">
              {" "}
              <div>
                <img src={wc} alt="" />
                <em>Wallet Connect</em>
              </div>{" "}
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
