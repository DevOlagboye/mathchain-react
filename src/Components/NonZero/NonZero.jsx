import React from "react";
import "./NonZero.css";
import eclipseImg from "../../assets/images/eclipse.png";

const NonZero = () => {
  return (
    <div className="non-zero-container">
      <div className="non-zero-text">
        <img src={eclipseImg} alt="" className="eclipse-image" />
        <h3>
          Non-zero-sum Game : <br /> Collaboration Over <br />
          Competition
        </h3>
      </div>
    </div>
  );
};

export default NonZero;
