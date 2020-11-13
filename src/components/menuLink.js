import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'

const MenuLink = ({ selector, text }) => (
  <ScrollIntoView selector={selector}>
    <a href={selector} onClick={(e) => e.preventDefault()}>
      {text}
    </a>
  </ScrollIntoView>
);

export default MenuLink;
