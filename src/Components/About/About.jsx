import React from "react";
import "./About.css";
import aboutGif from "../../assets/images/about-gif.gif";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-info-image">
        <div className="about-text">
          <h5>
            Match is more than just a social graph - it is a revolution. We
            believe that privacy and data sovereignty are fundamental human
            rights, and we're dedicated to empowering creators with the tools
            they need to take control of their digital lives. With Match, you
            can create a fully{" "}
            <span className="first-about-span">composable</span> ,{" "}
            <span className="second-about-span">modular</span> ,{" "}
            <span className="third-about-span"> user- </span>{" "}
            <span className="third-about-span"> owned </span> , and{" "}
            <span className="fourth-about-span">interoperable</span> social Dapp
            and have the freedom to customize your platform to your heart's
            content.
          </h5>
        </div>
        <div className="about-gif">
          <img src={aboutGif} alt="About Gif" />
        </div>
      </div>
    </div>
  );
};

export default About;
