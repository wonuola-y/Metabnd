import React from "react";
import nfts from "./tools/nfts.svg";
function Nft() {
  return (
  <div className="nft-container">
      <div className="nft">
      <div><h1>Metabnb NFTs</h1>
      <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
      <button>Learn More</button>
      </div>
      <div><img src={nfts} alt="nft img" /></div>
    </div>
  </div>
  );
}

export default Nft;
