import React from 'react';

const Logo = ({ imgSrc, altText }) => {
  return (
    <div className='logo'>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Logo;