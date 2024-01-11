import React from 'react';
import './contacts.css';

const Link = ({ logoSrc, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="link">
      <img src={logoSrc} alt={`Logo`}/>
    </a>
  );
};

export default Link;