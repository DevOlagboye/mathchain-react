import React from "react";
import "./NonZero.css";
import eclipseImg from "../../assets/images/eclipse.png";
import nonZeroGif from "../../assets/images/non-zero-gif.gif";

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
      <div className="non-zero-details">
        <div className="non-zero-gif">
          <img src={nonZeroGif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NonZero;
