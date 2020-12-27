import React from "react";
import Menus from "../menus/Menus";
import { FaBars, FaRegCommentAlt } from "react-icons/fa";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav className="nav section">
        <span className="nav__icon">
          <FaBars />
        </span>
        <div className="nav__brand">
          Company <span className="nav__brand--last">LOGO</span>
        </div>

        <span className="nav__icon">
          <FaRegCommentAlt />
        </span>
        <Menus />
      </nav>
    </header>
  );
}
