import React, { useState } from 'react';
import './button.css'; 

const Button = ({ text }) => {

  const handleClick = () => {
  };


  return (
    <button onClick={handleClick} className='button'>{text}</button>
  );
};

export default Button;