import React from "react";
import Menus from "../menus/Menus";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav className="nav section">
        <div className="nav__brand">
          Company <span className="nav__brand--last">LOGO</span>
        </div>

        <Menus />
      </nav>
    </header>
  );
}
