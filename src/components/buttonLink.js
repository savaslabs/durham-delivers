import React from 'react';

const ButtonLink = ({ className, link, text }) => (
  <a className={className} href={link} target="_blank" rel="noreferrer">
    {text}
  </a>
);

export default ButtonLink;
