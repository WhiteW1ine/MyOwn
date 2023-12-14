import React from 'react';
import './contacts.css'
import Links from './link.js';

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contact me:</h1>
      <div className='phone_and_mail'>
        <h2>+46704075861</h2>
        <h2>ratmir.shchadrynski@gmail.com</h2>
      </div>
      <div className='location'>
        <h3>Stockholm, Sweden</h3>
        <h3>Warsaw, Poland</h3>
      </div>
      <div className='links'>
        <Links></Links>
        <Links></Links>
        <Links></Links>
      </div>
    </div>
  );
};

export default Contacts;