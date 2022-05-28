import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const AboutImage = require("../../assets/about-photo.png");

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about">
          <div className="about-image">
            <img src={AboutImage} alt="secondary" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Companies</h5>
              <small>Worldwide</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>
            1+ year of work in a worldwide company (USA, Portugal, Russia).
            Developing and implementing new functionalities for web and mobile
            projects using HTML, CSS, JavaScript, TypeScript, React+Redux, React
            Native.
            Before becoming a developer I had
            experience of team management in sales. From March 2020 I started to
            learn web, Javascript, React.js and created several projects for
            portfolio. You can have a look at them here in the portfolio section.
          </p>
          <a href="#contacts" className="button button-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
