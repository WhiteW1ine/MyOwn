import React from 'react';
import './educationCard.css';

const EducationCard = ({ schoolName, logoSrc, description, years }) => {
  return (
    <div className="education-card">
      <div className="card-header">
        <img src={logoSrc} alt={`Logo`} className="logo" />
        <p>{schoolName}</p>
        <p>{description}</p>
      </div>
      <div className='card-content'>
        
      </div>
      <div className='years'>
        <h2>{years}</h2>
      </div>
    </div>
  );
};

export default EducationCard;