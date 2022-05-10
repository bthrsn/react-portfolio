import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine, RiMessage2Line } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItemsList = [
    { name: "#", iconType: AiOutlineHome },
    { name: "#about", iconType: AiOutlineUser },
    { name: "#experience", iconType: BiBook },
    { name: "#services", iconType: RiServiceLine },
    { name: "#contacts", iconType: RiMessage2Line },
  ];

  return (
    <nav>
      {navItemsList.map((item) => (
        <a href={item.name} key={item.name} onClick={() => setActiveNav(item.name)} className={activeNav === item.name ? "active" : ''}>
          <item.iconType />
        </a>
      ))}
    </nav>
  );
};

export default Nav;
