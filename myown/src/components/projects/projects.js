import React from 'react';
import "./projects.css"
import LargeProjectCard from './Cards/largeProjectCard';
import MidProjectCard from './Cards/midProjectCard';
import SmallProjectCard from './Cards/smallProjectCard';

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <div className='large_and_small'>
            <LargeProjectCard name={'HOTEL SYSTEM'} url={'https://github.com/WhiteW1ine/Hotel_System'} img={'button.png'}></LargeProjectCard>
            <div className='row'>
                <SmallProjectCard name={'123'} url={''} img={'empty_ellipse.png'}></SmallProjectCard>
                <SmallProjectCard name={'123'} url={''} img={'empty_ellipse.png'}></SmallProjectCard>
            </div>
        </div>
        <div className='mid_projects'>
          <MidProjectCard></MidProjectCard>
        </div>
    </div>
  );
};

export default Projects;