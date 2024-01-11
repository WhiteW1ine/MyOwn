import React from 'react';
import "./projects.css"
import LargeProjectCard from './Cards/largeProjectCard';
import MidProjectCard from './Cards/midProjectCard';
import SmallProjectCard from './Cards/smallProjectCard';

const Projects = () => {
  return (
    <div className="projects" id='projects'>
        <div className='large_and_small'>
            <LargeProjectCard></LargeProjectCard>
            <div className='row'>
                <SmallProjectCard></SmallProjectCard>
                <SmallProjectCard></SmallProjectCard>
            </div>
        </div>
        <div className='mid_projects'>
          <MidProjectCard></MidProjectCard>
        </div>
    </div>
  );
};

export default Projects;