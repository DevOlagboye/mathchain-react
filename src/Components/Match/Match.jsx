import React from "react";
import "./Match.css";
import moonImage from "../../assets/images/moon.png";

const Match = () => {
  return (
    <div className="match-container">
      <div className="match-text">
        <h3>
          Match's Modularity <br />
          ensures Seamless <br />
          Upgrades and Authentic <br />
          Connections
        </h3>
        <img src={moonImage} alt="Match Moon" className="moon-image" />
      </div>
    </div>
  );
};

export default Match;
