import React from "react";
import HeroImages from "../HeroImages";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        <div>
          <span>H</span>
          <span>a</span>
          <span>d</span>
          <span>a</span>
          <span>s</span>
        </div>
        <div>
          <span>S</span>
          <span>t</span>
          <span>u</span>
          <span>d</span>
          <span>i</span>
          <span>o</span>
        </div>
      </h1>
      <HeroImages />
    </section>
  );
};

export default Hero;
