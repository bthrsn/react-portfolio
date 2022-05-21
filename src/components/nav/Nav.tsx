import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";
import { RiMessage2Line } from "react-icons/ri";
import { IconType } from "react-icons";
import {Link} from "react-scroll";

const Nav: React.FC = () => {

  const navItemsList: navItemsListTypes = [
    { name: "home", iconType: AiOutlineHome },
    { name: "about", iconType: AiOutlineUser },
    { name: "experience", iconType: BiBook },
    { name: "portfolio", iconType: BsCodeSquare },
    { name: "contacts", iconType: RiMessage2Line },
  ];

  return (
    <nav>
      {navItemsList.map((item) => (
        <Link
          href={item.name}
          key={item.name}
          activeClass="active" smooth spy to={item.name} duration={0.5}
          className="nav-link"
        >
          <item.iconType />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

type navItemsListTypes = {
  name: string;
  iconType: IconType;
}[];
