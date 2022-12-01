import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  const FrontendSkills = [
    { name: "Typescript", grade: "Expert" },
    { name: "Javascript", grade: "Expert" },
    { name: "React", grade: "Expert" },
    { name: "Redux", grade: "Expert" },
    { name: "Phaser", grade: "Experienced" },
    { name: "Pixie.js", grade: "Experienced" },
  ];
  const MobileSkills = [
    { name: "React Native", grade: "Experienced" },
    { name: "Firebase", grade: "Intermidiate" },
    { name: "App Center", grade: "Intermidiate" },
    { name: "App Store Connect", grade: "Intermidiate" },
    { name: "Google Console", grade: "Intermidiate" },
  ];
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container container-experience">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {FrontendSkills.map((skill) => (
              <article className="experience-details" key={skill.name}>
                <BsPatchCheckFill className="experience-details-icon"/>
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.grade}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-frontend">
          <h3>Mobile Development</h3>
          <div className="experience-content">
            {MobileSkills.map((skill) => (
              <article className="experience-details" key={skill.name}>
                <BsPatchCheckFill className="experience-details-icon"/>
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.grade}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
