import React from "react";
import { social } from "./../data/social";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <nav className="footer section">
        <span className="footer__copyright">
          &copy; 2017 Company. All Rights Reserved.
        </span>

        <ul className="footer__social">
          <span>Follow us on:</span>
          {social.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
