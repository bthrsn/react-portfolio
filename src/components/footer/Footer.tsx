import React from "react";
import "./footer.css";

const Footer = () => {
  const permalinks = [
    { link: "#", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#experience", title: "Experience" },
    { link: "#portfolio", title: "Portfolio" },
    { link: "#contacts", title: "Contacts" },
  ];
  return (
    <footer>
      <a href="#" className="footer-logo">
        Mikhail Liakhovets
      </a>
      <ul className="permalinks">
        {permalinks.map((item) => (
          <li key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
