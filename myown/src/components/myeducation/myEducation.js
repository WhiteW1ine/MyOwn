import React from 'react';
import EducationCard from './educationCard';
import "./myEducation.css"

const MyEducation = () => {
  return (
    <div className="my-education">
        <h1>MyEducation</h1>
        <div className='cards'>
          <EducationCard 
          logoSrc={'/education_icons/lyceum_icon.png'} 
          schoolName={'Lyceum BSU'} 
          description={'High school with majoring in math and physics'}
          years={'2015-2017'}
          ></EducationCard>
          <EducationCard 
          logoSrc={'/education_icons/uppsala_icon.png'}
          schoolName={'Uppsala University'}
          description={'Game-design and programming'}
          years={'2019-2020'}
          ></EducationCard>
          <EducationCard 
          logoSrc={'/education_icons/lnu_icon.png'}
          schoolName={'Linnaeus University'}
          description={'Computer science and software development'}
          years={'2020-2023'}
          ></EducationCard>
        </div>
    </div>
  );
};

export default MyEducation;