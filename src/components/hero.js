import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroImg from '../images/hero.jpg';
import ButtonLink from '../components/buttonLink';
import Header from '../components/header';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(9,82,86,0.65), rgba(9,82,86,0.65)), url(${HeroImg}) center/cover`,
        height: 590,
        position: 'relative'
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="header__container"
        id="header__container"
        data-sal="fade"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <h1 className="hero__headline">Delivery from your favorite, independent Durham restaurants.</h1>
        <div
          style={{
            marginTop: 45,
          }}
        >
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
