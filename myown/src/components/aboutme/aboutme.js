import React from 'react';
import './aboutme.css';
import WelcomeColumn from './columns/WelcomeColumn';
import ShortInfoColumn from './columns/shortinfocolumn';
import SkillsColumn from './columns/SkillsColumns';

const AboutMe = () => {
  return (
    <div className="about-me" id='aboutme'>
        <ShortInfoColumn></ShortInfoColumn>
        <WelcomeColumn></WelcomeColumn>
        <SkillsColumn></SkillsColumn>
    </div>
  );
};

export default AboutMe;