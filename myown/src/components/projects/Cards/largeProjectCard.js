import React from 'react';
import "./cards.css"


const LargeProjectCard = ({name, url, img, header}) => {
  return (
    <div className="large_project_card">
        <div className='name'>{name}</div>
        <div className='row'>
          <div className='myprojects'>{header}</div>
          <a href={url} target="_blank" rel="noopener noreferrer" className="link">
            <img src={img} alt={`Logo`} className="pic" />
          </a>
        </div>
    </div>
  );
};

export default LargeProjectCard;