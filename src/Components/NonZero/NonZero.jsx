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
        <div className="non-zero-text">
          <h5>
            Match's collaborative approach to <br />
            decentralized social graph technology <br /> benefits the entire
            ecosystem, driving <br />
            innovation and facilitating authentic social <br />
            experiences. By empowering developers to
            <br /> build DApps with a focus on connection and <br />
            community rather than competing for users,
            <br /> Match is creating a cohesive and robust decentralized <br />
            social graph where the benefits of collaboration are felt by all.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NonZero;
