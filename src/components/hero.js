import React from 'react';

import ButtonLink from '../components/buttonLink';

const Hero = () => {
  return (
    <div className="hero__background">
      <div
        className="header__container"
        id="header__container"
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className="hero__headline">
          Delivery from your favorite, independent Durham restaurants.
        </div>
        <div className="hero__cta-group">
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
};

export default Hero;
