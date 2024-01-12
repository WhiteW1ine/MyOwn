import React from 'react';
import "./projects.css"
import LargeProjectCard from './Cards/largeProjectCard';
import MidProjectCard from './Cards/midProjectCard';
import SmallProjectCard from './Cards/smallProjectCard';

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <div className='large_and_small'>
            <LargeProjectCard name={'HOTEL SYSTEM'} url={'https://github.com/WhiteW1ine/Hotel_System'} img={'button.png'} header={'MY PROJECTS'}></LargeProjectCard>
            <div className='row'>
                <SmallProjectCard name={'SAVING BLUE'} url={'https://github.com/IoanaParosu/SavingBlue'} img={'button.png'}></SmallProjectCard>
                <SmallProjectCard name={'JAMM IT'} url={'https://github.com/WhiteW1ine/Shoot-em-up-game'} img={'button.png'}></SmallProjectCard>
            </div>
            <div className='row'>
                <SmallProjectCard name={'TFTP SERVER'} url={'https://github.com/WhiteW1ine/TFTP_Server'} img={'button.png'}></SmallProjectCard>
                <SmallProjectCard name={'HTTP SERVER'} url={'https://github.com/WhiteW1ine/HTTP_Server'} img={'button.png'}></SmallProjectCard>              
            </div>
        </div>
        <div className='mid_projects'>
          <MidProjectCard name={'DATA STRUCTURES'} url={'https://github.com/WhiteW1ine/Data_Structures'} img={'button.png'}></MidProjectCard>
          <MidProjectCard name={'QUIZ'} url={'https://github.com/WhiteW1ine/Quiz'} img={'button.png'}></MidProjectCard>
        </div>
    </div>
  );
};

export default Projects;