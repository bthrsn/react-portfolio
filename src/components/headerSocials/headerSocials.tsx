import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./headerSocials.css";

const HeaderSocials: React.FC = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/mikhail-liakhovets-315835231/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/bthrsn" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
