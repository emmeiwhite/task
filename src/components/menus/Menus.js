import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { menus } from "./../data/menus";

import "./Menus.scss";
export default function Menus() {
  return (
    <ul className="menu">
      {menus.map(({ id, text, url, type, isActive }) => {
        return (
          <li
            className={`${isActive ? "menu__nav active" : "menu__nav"}`}
            key={id}
          >
            <a
              href={url}
              className={`${
                type === "button" ? "action-button" : "menu__nav--link"
              }`}
            >
              {type === "button" ? (
                <span className="action-button__icon">
                  <FaRegCommentAlt />
                  <span>{text}</span>
                </span>
              ) : (
                <span class>{text}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
