import React from "react";
import "./Header.css";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#aboutMe" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" }
];

const Header = () => {
  return (
    <header className="header-container">
      <a href="#" className="header-logo">
        <h1 className="header-portfolio">Yasin Mulla</h1>
      </a>
      <nav className="menu-bar">
        {menuItems.map((item) => (
          <a key={item.name} href={item.href} className="">
            {item.name}
          </a>
        ))}
      </nav>
      <div className="contact-button">
        <a href="#contactme" className="">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
