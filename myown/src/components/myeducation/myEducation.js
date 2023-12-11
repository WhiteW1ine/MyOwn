import React from 'react';
import EducationCard from './educationCard';
import "./myEducation.css"

const MyEducation = () => {
  return (
    <div className="my-education">
        <h1>MyEducation</h1>
        <div className='cards'>
          <EducationCard></EducationCard>
          <EducationCard></EducationCard>
          <EducationCard></EducationCard>
        </div>
    </div>
  );
};

export default MyEducation;