import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const MenuLink = ({ selector, text }) => {
  const handleMenuClick = e => {
    e.preventDefault();
    const input = document.querySelector('input.checkbox');
    input.checked = false;
    document.body.style.overflow = 'initial';
  }

  return (
    <ScrollIntoView selector={selector}>
      <a href={selector} onClick={(e) => handleMenuClick(e)}>
        {text}
      </a>
    </ScrollIntoView>
  );
};

export default MenuLink;
