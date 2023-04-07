import React from "react";
import "./HyperScale.css";
import hyperImage from "../../assets/images/hyper-text-image.png";

const HyperScale = () => {
  return (
    <div className="hyperscale-container">
      <div className="hyperscale-main-text">
        <h3>
          Hyper-scalable social
          <br /> graph for seamless <br />
          connection, collaboration,
          <br /> and innovation.
        </h3>
        <img src={hyperImage} alt="Hyper Icon" className="hyper-img" />
      </div>
    </div>
  );
};

export default HyperScale;
