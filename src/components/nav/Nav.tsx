import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { IconType } from "react-icons";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navItemsList: navItemsListTypes = [
    { name: "#", iconType: AiOutlineHome },
    { name: "#about", iconType: AiOutlineUser },
    { name: "#experience", iconType: BiBook },
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

type navItemsListTypes = {
  name: string;
  iconType: IconType;
}[]
