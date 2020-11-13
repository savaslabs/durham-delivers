import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import Logo from '../images/logo.png';
import Hamburger from '../components/hamburger';

const Header = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = 15;

      // Make sure they scroll more than delta
      if (Math.abs(prevScrollY.current - currentScrollY) <= delta) return;

      if (prevScrollY.current < currentScrollY && goingUp && currentScrollY > 85) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp && currentScrollY > 85) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <header className={goingUp ? 'header-down' : 'header-up'}>
      <div className="header__wrapper">
        <div style={{ display: 'flex', width: '50%' }}>
          <img
            src={Logo}
            alt="Durham Delivers: Durham's local food pickup service."
            className="header__logo"
          />
          <div style={{ marginLeft: 15 }}>
            <h1 className="header__title">
              Durham
              <br />
              Delivers
            </h1>
            <p className="header__subheading">Delivery that works</p>
          </div>
        </div>
        <Hamburger />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
