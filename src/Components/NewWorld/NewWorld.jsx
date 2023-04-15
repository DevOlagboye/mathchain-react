import React from "react";
import newWorldImage from "../../assets/images/newworld-left.png";
import "./NewWorld.css";

const NewWorld = () => {
  return (
    <div className="new-world-container">
      <div className="new-world-text">
        <h5>
          <span>ENTER </span>A NEW WORLD
        </h5>
        <h5 className="second-new-world-text">OF CONNECTED TRAFFIC</h5>
        <p>Building the Decentralized Social Network We Truly Deserve</p>
        <img src={newWorldImage} alt="" className="new-world-svg" />
      </div>
    </div>
  );
};

export default NewWorld;
