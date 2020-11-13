/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import SEO from "../components/seo";
import Hero from "../components/hero";

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        minHeight: `100vh`,
      }}
    >
      <SEO title="Home" />
      <Hero />
      <main
        style={{
          position: `relative`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
