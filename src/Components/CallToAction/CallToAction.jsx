import React from "react";
import "./CallToAction.css";
import iconLeft from "../../assets/images/icon-left.png";
import iconRight from "../../assets/images/icon-right.png";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <img src={iconLeft} alt="" className="icon-left" />
        <h2 className="first-text">WHAT IS</h2>
        <h2 className="second-text">MATCH</h2>
        <img src={iconRight} alt="" className="icon-right" />
      </div>
    </div>
  );
};

export default CallToAction;
