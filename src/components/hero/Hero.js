import React from "react";
import Header from "./../header/Header";
import HeroDescription from "./../hero-description/HeroDescription";

import "./Hero.scss";
export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <HeroDescription />
    </div>
  );
}
