import React from "react";
import Header from "./../header/Header";

import "./Hero.scss";
export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="hero__description">This is Hero Title</div>
    </div>
  );
}
