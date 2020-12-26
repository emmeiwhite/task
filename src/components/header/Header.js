import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav className="nav section">
        <div className="nav__brand">
          Company <span className="nav__brand--last">LOGO</span>
        </div>

        <ul className="menu">
          <li className="menu__nav active">
            <a href="index.html" className="menu__nav__link">
              About
            </a>
          </li>

          <li className="menu__nav">
            <a href="about.html" className="menu__nav__link">
              Services
            </a>
          </li>

          <li className="menu__nav">
            <a href="projects.html" className="menu__nav__link">
              Solutions
            </a>
          </li>

          <li className="menu__nav">
            <a href="contact.html" className="menu__nav__link">
              Blog
            </a>
          </li>
          <li className="menu__nav">
            <a href="contact.html" className="menu__nav__link">
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
