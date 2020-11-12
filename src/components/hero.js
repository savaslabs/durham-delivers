import React from 'react';
import HeroImg from '../images/hero.jpg';
import Hamburger from '../components/hamburger';
import ButtonLink from '../components/buttonLink';

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
      <div style={{
        marginTop: 45
      }}>
        <ButtonLink
          className="button hero__cta"
          link="https://docs.google.com/forms/d/e/1FAIpQLSd26UWHc2DFrwGkIyJX6MF8USap_zyQgMBwn6fbXqIwFrDPUA/viewform"
          text="Sign Up Your Community"
        />
        <ButtonLink
          className="button hero__cta"
          link="https://docs.google.com/forms/d/e/1FAIpQLSf-bYRx-tcwdOgL2JzqBxBrHBnF4LyItqaGoSLuYRYv3XKI_g/viewform"
          text="Sign Up Your Restaurant"
        />
      </div>
    </div>
  </div>
);

export default Hero;
