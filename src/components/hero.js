import React from "react";
import HeroImg from "../images/hero.jpg";
import Hamburger from "../components/hamburger";

const Hero = () => (
  <div
    style={{
      background: `linear-gradient(0deg, rgba(9,82,86,0.65), rgba(9,82,86,0.65)), url(${HeroImg}) center/cover`,
      height: 590,
    }}
  >
    <Hamburger />
    <div
      className="header__container"
      id="header__container"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <h1>Delivery from your favorite, independent Durham restaurants.</h1>
    </div>
  </div>
);

export default Hero;
