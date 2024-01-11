import React from 'react';
import './contacts.css'
import Links from './link.js';

const Contacts = () => {
  return (
    <div className="contacts" id='contacts'>
      <h1>Contact me:</h1>
      <div className='phone_and_mail'>
        <h2>+46704075861</h2>
        <h2>ratmir.shchadrynski@gmail.com</h2>
      </div>
      <div className='location'>
        <h3>RATMIR SHCHADRYNSKI</h3>
        <h3>Stockholm, Sweden</h3>
        <h3>Warsaw, Poland</h3>
      </div>
      <div className='links'>
        <Links logoSrc={'mail_icon.png'} linkUrl={'mailto:ratmir.shchadrynski@gmail.com'}></Links>
        <Links logoSrc={'linkedin_icon.png'} linkUrl={'https://www.linkedin.com/in/ratmirsh/'}></Links>
        <Links logoSrc={'facebook_icon.png'} linkUrl={'https://facebook.com/ratmir.lis/'}></Links>
        <Links logoSrc={'whatsapp_icon.png'} linkUrl={'https://wa.me/+46704075861?text=Hello!'}></Links>

      </div>
    </div>
  );
};

export default Contacts;