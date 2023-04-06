import React from "react";
import "./CallToAction.css";
import iconLeft from "../../assets/images/icon-left.png";
import iconRight from "../../assets/images/icon-right.png";
import firstTextIcon from "../../assets/images/first-text-icon.png";
import secondTextIcon from "../../assets/images/second-text-icon.png";
import thirdTextIcon from "../../assets/images/third-text-icon.png";
import fourthTextIcon from "../../assets/images/fourth-text-icon.png";
import fifthTextIcon from "../../assets/images/fifth-text-icon.png";
import sixthTextIcon from "../../assets/images/sixth-text-icon.png";
import seventhTextIcon from "../../assets/images/seventh-text-icon.png";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-text-container">
        <div className="cta-text">
          <img src={iconLeft} alt="" className="icon-left" />
          <h2 className="first-text">WHAT IS</h2>
          <h2 className="second-text">MATCH</h2>
          <img src={iconRight} alt="" className="icon-right" />
        </div>
      </div>

      <div className="cta-details-container">
        <h5 className="cta-details">
          Match is an innovative{" "}
          <span className="first-img">
            <img src={firstTextIcon} alt="" />
          </span>{" "}
          Web3 social graph{" "}
          <span className="second-img">
            <img src={secondTextIcon} alt="" />
          </span>{" "}
          that operates on the Cosmos with a focus on decentralization{" "}
          <span className="third-img">
            <img src={thirdTextIcon} alt="" />
          </span>{" "}
          and composability{" "}
          <span className="fourth-img">
            <img src={fourthTextIcon} alt="" />
          </span>{" "}
          It empowers users with data sovereignty and{" "}
          <span className="fifth-img">
            <img src={fifthTextIcon} alt="" />
          </span>{" "}
          provides Web3 developers{" "}
          <span className="sixth-img">
            <img src={sixthTextIcon} alt="" />
          </span>{" "}
          with infrastructure to build novel and user-friendly{" "}
          <span className="seventh-img">
            <img src={seventhTextIcon} alt="" />
          </span>{" "}
          DApps permissionlessly.
        </h5>
      </div>
    </div>
  );
};

export default CallToAction;
