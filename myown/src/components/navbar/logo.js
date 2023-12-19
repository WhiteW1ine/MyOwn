import React from 'react';
import './navbar.css'; 

const Logo = ({ imgSrc, altText }) => {
  return (
    <div className='logo_form'>
      <img src={imgSrc} alt={altText} className='logo' />
    </div>
  );
};

export default Logo;