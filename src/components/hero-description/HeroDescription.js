import React from "react";
import "./HeroDescription.scss";

import { services } from "./../data/services";

export default function HeroDescription() {
  console.log(services);
  return (
    <div className="description">
      <h1 className="description__title">
        Integer bibendum sit amet arcu vel egastes.
      </h1>

      <div className="service">
        {services.map(({ id, icon, text }) => {
          return (
            <div className="service__name" key={id}>
              <span className="service__name--icon">{icon}</span>
              <span className="service__name--text">{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
