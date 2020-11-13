import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/logo.png';
import Hamburger from '../components/hamburger';

const Header = () => (
  <header>
    <div className="header__wrapper">
      <img src={Logo} alt="Durham Delivers: Durham's local food pickup service." className="header__logo" />
      <Hamburger />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
