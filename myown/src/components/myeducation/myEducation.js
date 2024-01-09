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
          program_description={'A specialized lyceum with in-depth study of mathematics and physics. Participant in national Olympiads in these subjects.'}
          ></EducationCard>
          <EducationCard 
          logoSrc={'/education_icons/uppsala_icon.png'}
          schoolName={'Uppsala University'}
          description={'Game-design and programming'}
          years={'2019-2020'}
          program_description={'During my education at Uppsala University, I had game design as my major and programming as my minor. <br/><br/> Mainly, the education was aimed at group projects, how to deal with SCRUM methodology, and being a valuable member of development process. <br/><br/> Considering my minor, I was primarily focused on Unity engine and creating games with tiny pre-made C++ engines'}
          ></EducationCard>
          <EducationCard 
          logoSrc={'/education_icons/lnu_icon.png'}
          schoolName={'Linnaeus University'}
          description={'Computer science and software development'}
          years={'2020-2023'}
          program_description={'For my education at LNU, I personally tried a huge range of different technologies and topics related to the computer science field. <br/><br/> Beginning with computer security and networks and ending with advanced mathematics. Low-level microchip programming with assembly and Pico SDK, database technology and web-development. <br/><br/> Eventually, I graduated with a computer science bachelor '}
          ></EducationCard>
        </div>
    </div>
  );
};

export default MyEducation;