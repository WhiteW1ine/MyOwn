import React from 'react';
import './aboutme.css';
import DescriptionColumn from './columns/DescriptionColumn';
import ShortInfoColumn from './columns/shortinfocolumn';
import SkillsColumn from './columns/SkillsColumns';

const AboutMe = () => {
  return (
    <div className="about-me">
        <ShortInfoColumn></ShortInfoColumn>
        <DescriptionColumn></DescriptionColumn>
        <SkillsColumn></SkillsColumn>
    </div>
  );
};

export default AboutMe;