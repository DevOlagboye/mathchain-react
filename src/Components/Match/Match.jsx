import React from "react";
import newWorldImage from "../../assets/images/newworld-left.png";
import "./Match.css";
import moonImage from "../../assets/images/moon.png";
import matchImage from "../../assets/images/match-gif.gif";

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
      <div className="match-text-image">
        <div className="match-text-details">
          <p>
            Match's modularity enables the seamless <br />
            integration of new features and upgrades <br />
            without compromising user-owned content
            <br />
            and social relationships. Ultimately, Match
            <br /> offers a promising solution for creators seeking <br />
            to build and maintain authentic relationships
            <br /> with their community on a decentralized <br />
            platform.
          </p>
        </div>
        <div className="match-image">
          <img src={matchImage} alt="" />
        </div>
      </div>
      <img src={newWorldImage} alt="" className="match-left-svg" />
    </div>
  );
};

export default Match;
