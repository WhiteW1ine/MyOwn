import React from 'react';
import './contacts.css'

const Link = ({logoSrc}) => {
  return (
    <div className="link">
        <img src={logoSrc} alt={`Logo`} className="pic" />        
    </div>
  );
};

export default Link;