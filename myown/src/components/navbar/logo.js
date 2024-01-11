import React from 'react';
import './navbar.css';

const Logo = ({ imgSrc, altText}) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className='logo_form' onClick={handleClick}>
      <img src={imgSrc} alt={altText} className='logo' />
    </div>
  );
};

export default Logo;