import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./headerSocials.css";

const HeaderSocials: React.FC = () => {
  return (
    <div className="header-socials">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
