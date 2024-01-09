import React from 'react';
import './educationCard.css';

const EducationCard = ({ schoolName, logoSrc, description, years, program_description }) => {
  return (
    <div className="education-card">
      <div className="card-header">
        <img src={logoSrc} alt={`Logo`} className="logo" />
        <div className='row'>
          <p className='school-name'>{schoolName}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className='card-content'>
        <div dangerouslySetInnerHTML={{ __html: program_description }} />
      </div>
      <div className='years'>
        {years}
      </div>
    </div>
  );
};

export default EducationCard;