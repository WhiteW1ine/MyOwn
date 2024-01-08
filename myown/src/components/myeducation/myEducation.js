import React from 'react';
import EducationCard from './educationCard';
import "./myEducation.css"

const MyEducation = () => {
  return (
    <div className="my-education">
        <h1>MyEducation</h1>
        <div className='cards'>
          <EducationCard logoSrc={'/education_icons/lyceum_icon.png'}></EducationCard>
          <EducationCard logoSrc={'/education_icons/uppsala_icon.png'}></EducationCard>
          <EducationCard logoSrc={'/education_icons/lnu_icon.png'}></EducationCard>
        </div>
    </div>
  );
};

export default MyEducation;