import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo.png';
import Hamburger from '../components/hamburger';

const Header = () => (
  <header>
    <div className="header__wrapper">
      <div style={{ display: 'flex', width: '50%' }}>
        <img
          src={Logo}
          alt="Durham Delivers: Durham's local food pickup service."
          className="header__logo"
        />
        <div style={{ marginLeft: 15 }}>
          <h1 className="header__title">Durham<br />Delivers</h1>
          <p className="header__subheading">Delivery that works</p>
        </div>
      </div>
      <Hamburger />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
