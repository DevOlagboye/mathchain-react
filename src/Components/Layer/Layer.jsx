import React from "react";
import "./Layer.css";
import layerBanner from "../../assets/images/layer-banner.png";

const Layer = () => {
  return (
    <div className="layer-container">
      <h3 className="layer-text">
        A Layer 1 Social Graph with <br /> Cosmos-level Interoperability.
      </h3>
      <h5 className="layer-text-details">
        Building a connected, decentralized future
      </h5>
      <button className="layer-button">DVEDOCS</button>
      <img src={layerBanner} alt="" className="layer-banner" />
    </div>
  );
};

export default Layer;
