import React from "react";
import HeaderSocials from "../headerSocials";
import "./header.css";

const Image = require("../../assets/main-photo.png");
const CV = require("../../assets/CV_Frontend_Developer_Liakhovets_Mikhail.pdf");

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Mikhail Liakhovets</h1>
        <h5 className="text-light">React/React Native Developer</h5>
        <div className="button-group">
          <a
            href={CV}
            download
            className="button"
          >
            Download CV
          </a>
          <a href="#contacts" className="button button-primary">
            Contact Me
          </a>
        </div>
        <HeaderSocials />
        <div className="main-photo">
          <img src={Image} alt="main" />
        </div>
        <a href="#contacts" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
